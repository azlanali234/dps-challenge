import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useOpenPlz } from '../hooks/useOpenPlz';
import './AddressForm.css';

export const AddressForm: React.FC = () => {
  const [locality, setLocality] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [lastEdited, setLastEdited] = useState<'locality' | 'postalCode' | null>(null);

  const debouncedLocality = useDebounce(lastEdited === 'locality' ? locality : '', 1000);
  const debouncedPostalCode = useDebounce(lastEdited === 'postalCode' ? postalCode : '', 1000);

  // Determine query parameters based on what was last edited
  const queryName = lastEdited === 'locality' && debouncedLocality.length >= 2 ? debouncedLocality : '';
  const queryPlz = lastEdited === 'postalCode' && debouncedPostalCode.length === 5 ? debouncedPostalCode : '';

  const { data: localities, isFetching, error } = useOpenPlz(queryPlz, queryName);

  const [plzOptions, setPlzOptions] = useState<string[]>([]);
  const [plzError, setPlzError] = useState('');

  // Effect to process search results
  useEffect(() => {
    if (!localities) return;

    if (lastEdited === 'locality' && queryName) {
      if (localities.length === 0) {
        setPlzOptions([]);
        setPlzError('Locality not found');
      } else if (localities.length === 1) {
        setPostalCode(localities[0].postalCode);
        setPlzOptions([]);
        setPlzError('');
      } else {
        // Multiple localities found - extract distinct postal codes
        const distinctPlzs = Array.from(new Set(localities.map(l => l.postalCode))).sort();
        setPlzOptions(distinctPlzs);
        if (distinctPlzs.length > 0 && !distinctPlzs.includes(postalCode)) {
          setPostalCode(distinctPlzs[0]);
        }
        setPlzError('');
      }
    } else if (lastEdited === 'postalCode' && queryPlz) {
      if (localities.length === 0) {
        setPlzError('Invalid postal code');
      } else {
        // Valid PLZ -> Autofill locality
        setLocality(localities[0].name);
        setPlzError('');
      }
    }
  }, [localities, lastEdited, queryName, queryPlz]);

  const handleLocalityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocality(e.target.value);
    setLastEdited('locality');
    setPlzOptions([]);
    setPlzError('');
  };

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPostalCode(e.target.value);
    setLastEdited('postalCode');
    setPlzError('');
  };

  return (
    <div className="address-form-container">
      <h2 className="form-title">Validate Address</h2>
      <div className="form-group">
        <label htmlFor="locality">Locality (City/Town)</label>
        <div className="input-wrapper">
          <input
            id="locality"
            type="text"
            className="form-input"
            placeholder="e.g. Berlin"
            value={locality}
            onChange={handleLocalityChange}
            aria-describedby="locality-hint"
          />
          {isFetching && lastEdited === 'locality' && <span className="loader"></span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="postalCode">Postal Code (PLZ)</label>
        <div className="input-wrapper">
          {plzOptions.length > 1 && lastEdited === 'locality' ? (
            <select
              id="postalCode"
              className="form-select fade-in"
              value={postalCode}
              onChange={handlePostalCodeChange}
            >
              {plzOptions.map(plz => (
                <option key={plz} value={plz}>{plz}</option>
              ))}
            </select>
          ) : (
            <input
              id="postalCode"
              type="text"
              className={`form-input ${plzError ? 'input-error' : ''} fade-in`}
              placeholder="e.g. 10115"
              value={postalCode}
              onChange={handlePostalCodeChange}
            />
          )}
          {isFetching && lastEdited === 'postalCode' && <span className="loader"></span>}
        </div>
        {plzError && <div className="error-message shake">{plzError}</div>}
        {error && <div className="error-message shake">Failed to reach Open PLZ API</div>}
      </div>

      <div className="success-banner">
        {localities && localities.length > 0 && !plzError && !isFetching && (
          <span className="success-text">✓ Location Verified</span>
        )}
      </div>
    </div>
  );
};
