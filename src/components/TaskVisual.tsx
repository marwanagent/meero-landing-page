const palettes = ["task-flamingo", "task-banana", "task-lavender"];

export function TaskVisual({ task }: { task: number }) {
  return (
    <div className={palettes[task]}>
      <svg aria-hidden="true" viewBox="0 0 320 200" className="block w-full" fill="none">
        {task === 0 ? (
          <>
            <path d="M80 65H246M240 140H74" stroke="var(--color-task-tomato)" strokeWidth="4" strokeDasharray="6 7" />
            <path d="m236 55 12 10-12 10M84 130l-12 10 12 10" stroke="var(--color-task-tomato)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="28" y="38" width="120" height="62" rx="12" fill="var(--color-task-tomato)" />
            <path d="m40 51 48 29 48-29" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            <path d="M183 103h89a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12h-64l-25 14v-14a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12Z" fill="var(--color-task-peacock)" />
            <path d="M190 124h73M190 143h44" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </>
        ) : task === 1 ? (
          <>
            <path d="M83 27h100l25 25v118H83Z" fill="white" stroke="var(--color-ink)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M183 27v25h25M103 61h47M103 85h83M103 101h83M103 133h34" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" />
            <path d="M39 109h29m-9-9 10 9-10 9" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="212" cy="137" r="39" fill="var(--color-task-peacock)" />
            <path d="m192 137 14 14 26-29" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i}>
                <rect x={32 + i * 5} y={30 + i * 26} width="100" height="32" rx="6" fill={i % 2 ? "var(--color-task-peacock)" : "var(--color-task-grape)"} stroke="var(--color-task-lavender)" strokeWidth="2" />
                <path d={`M${44 + i * 5} ${42 + i * 26}h56`} stroke="white" strokeWidth="3" strokeLinecap="round" />
              </g>
            ))}
            <path d="M163 99h25m-9-9 10 9-10 9" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="207" y="54" width="86" height="92" rx="12" fill="white" />
            <rect x="220" y="70" width="13" height="13" rx="3" fill="var(--color-task-tomato)" />
            <rect x="220" y="98" width="13" height="13" rx="3" fill="var(--color-task-tomato)" />
            <path d="M244 77h34M244 105h25" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" />
            <path d="m226 130 4 4 8-9" stroke="var(--color-task-peacock)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    </div>
  );
}
