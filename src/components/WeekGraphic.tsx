import { weekGraphic } from "@/content/home";

const taskColors = ["tomato", "peacock", "tangerine", "banana", "grape"];
const freedColors = ["lavender", "basil", "flamingo", "peacock"];
// Hours from 9 AM. Different starts and durations keep the working days distinct.
const appointments = [
  [
    [0, 1.5], [1.5, 1], [2.5, 2], [4.25, 1.25], [5.5, 3]],
  [
    [0.5, 2], [2.5, 1.25], [3.5, 1.5], [5, 2], [7, 1.5]],
  [
    [0, 1], [1, 2.5], [3.5, 1.25], [4.75, 2], [6.75, 2]],
  [
    [0.25, 2], [2.25, 1], [3.25, 2.5], [5.5, 1.5], [7, 2]],
  [
    [0, 1.5], [1.5, 2], [3.25, 1.5], [4.75, 1.25], [6, 2.5]],
];

export function WeekGraphic() {
  return (
    <figure className="week-comparison card-raised" aria-describedby="week-description">
      <figcaption id="week-description" className="sr-only">
        {weekGraphic.description}
      </figcaption>
      {(["now", "after"] as const).map((state) => (
        <div key={state} className={`calendar calendar-${state}`} role="img" aria-label={weekGraphic[state].alt}>
          <div aria-hidden="true">
            <div className="calendar-title">
              <span>{weekGraphic[state].label}</span>
              {state === "after" && <span className="calendar-status">{weekGraphic.handledLabel}</span>}
            </div>
            <div className="calendar-days">
              <span />
              {weekGraphic.days.map((day) => <span key={day}>{day}</span>)}
            </div>
            <div className="calendar-body">
              <div className="calendar-times">
                {weekGraphic.times.map((time, i) => <span key={time} style={{ top: `${i * 25}%` }}>{time}</span>)}
              </div>
              <div className="calendar-columns">
                {weekGraphic.days.map((day, dayIndex) => (
                  <div className="calendar-day" key={day}>
                    {state === "now" ? appointments[dayIndex].map(([start, duration], index) => {
                      const taskIndex = (index + dayIndex) % 5;
                      return (
                        <span key={index} className={`calendar-event task-${taskColors[taskIndex]}`} style={{ top: `${start / 8 * 100}%`, height: `${duration / 8 * 100}%`, left: index === 3 ? "10%" : undefined }}>
                          {weekGraphic.now.tasks[taskIndex]}
                        </span>
                      );
                    }) : (
                      <>
                        <span className={`calendar-event calendar-handled task-${taskColors[dayIndex]}`} style={{ top: 0, height: "19%" }}>
                          <s>{weekGraphic.after.handled[dayIndex]}</s>
                        </span>
                        {dayIndex !== 2 && <span className={`calendar-event task-${freedColors[dayIndex > 2 ? dayIndex - 1 : dayIndex]}`} style={{ top: `${dayIndex % 2 ? 55 : 30}%`, height: `${dayIndex === 4 ? 55 : 32}%` }}>
                          {weekGraphic.after.freed[dayIndex > 2 ? dayIndex - 1 : dayIndex]}
                        </span>}
                      </>
                    )}
                  </div>
                ))}
                <span className="calendar-now-line" title={weekGraphic.nowLine} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </figure>
  );
}
