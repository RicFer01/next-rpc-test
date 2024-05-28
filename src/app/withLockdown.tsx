import React, { useEffect, useState } from 'react';
import { initiateLockdown } from './installSesLockdown';

const withLockdown = (WrappedComponent: any) => {
  return function LockdownComponent(props: any) {
    useEffect(() => {
      const applyLockdown = async () => {
        await initiateLockdown();
      };

      applyLockdown();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLockdown;
