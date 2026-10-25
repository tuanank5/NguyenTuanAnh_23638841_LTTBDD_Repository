import { useCallback, useEffect, useState } from 'react';
import { fetchPhone } from '../api/phoneApi';
import { ErrorBox } from '../components/ErrorBox';
import { Loading } from '../components/Loading';
import { Phone } from '../types';
import { SelectPhoneApp } from './SelectPhoneApp';

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    // TODO 1:
    setError(null);
    setPhone(null);
    // TODO 2:
    try {
      setPhone(await fetchPhone('1'));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error');
    }
  }, []);

  // TODO 3: useEffect gọi load() khi màn hình mở lần đầu
  useEffect(() => {
    load();
  }, [load]);

  // TODO 4:
  if (error) return <ErrorBox message={error} onRetry={load} />;

  // TODO 5:
  if (!phone) return <Loading />;

  // TODO 6:
  return <SelectPhoneApp phone={phone} />;
}
