/** @jsxImportSource react */
export function SmartDrawerDiagram() {
  return (
    <div
      className="drawer-diagram"
      aria-label="Illustrative component diagram for the smart drawer"
    >
      <p className="diagram-label">Illustrative diagram</p>
      <ol className="diagram-flow">
        <li>
          <strong>Fingerprint sensor</strong>
          <span>Recognise or enroll</span>
        </li>
        <li>
          <strong>ESP32</strong>
          <span>Read the sensor · control access</span>
        </li>
        <li>
          <strong>Lock driver &amp; latch</strong>
          <span>Unlock · automatically relock</span>
        </li>
      </ol>
      <p className="diagram-connection">
        Fingerprint sensor connects to ESP32 over UART. ESP32 controls the lock.
      </p>
      <div className="diagram-support">
        <p>
          <strong>Enrollment button</strong>
          <span>Starts registration</span>
        </p>
        <p>
          <strong>Buzzer</strong>
          <span>Access feedback</span>
        </p>
        <p>
          <strong>Browser dashboard</strong>
          <span>Wi-Fi · users and recent activity</span>
        </p>
      </div>
    </div>
  );
}
