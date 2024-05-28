// import 'ses'; // adds lockdown, harden, and Compartment
// import '@endo/eventual-send/shim.js'; // adds support needed by E
// import { Buffer } from 'buffer';

// globalThis.Buffer = Buffer;

// const consoleTaming = process.env.NEXT_PUBLIC_CONSOLE_TAMING  ? 'unsafe' : 'safe';

// lockdown({
//   errorTaming: 'unsafe',
//   overrideTaming: 'severe',
//   consoleTaming
// });

// Error.stackTraceLimit = Infinity;

// (async () => {
//   await import("ses"); // adds lockdown, harden, and Compartment
//   const consoleTaming = process.env.NEXT_PUBLIC_CONSOLE_TAMING  ? 'unsafe' : 'safe';

//   lockdown({
//     errorTaming: "unsafe",
//     overrideTaming: "severe",
//     consoleTaming,
//   });

//   Error.stackTraceLimit = Infinity;
// })();

// export default function initiateLockdown() {
//   return Promise.resolve();
// }


export async function initiateLockdown() {
  await import("ses"); // adds lockdown, harden, and Compartment

  const consoleTaming = process.env.NEXT_PUBLIC_CONSOLE_TAMING ? 'unsafe' : 'safe';

  lockdown({
    errorTaming: "unsafe",
    overrideTaming: "severe",
    consoleTaming,
  });

  Error.stackTraceLimit = Infinity;

  return Promise.resolve();
}