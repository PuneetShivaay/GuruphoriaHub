'use client';

import { useEffect } from 'react';

export default function LegacyViewStub() {
  useEffect(() => {
    window.location.href = '/courses';
  }, []);

  return null;
}