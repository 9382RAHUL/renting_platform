import { useState } from "react";
import { useParams } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #ede9f7;
    --card-bg: #faf9fd;
    --primary: #3b368f;
    --accent: #6b64d8;
    --teal-start: #5de0c5;
    --teal-end: #74d7f7;
    --text-dark: #1e1b4b;
    --text-mid: #4b4880;
    --text-soft: #8b89b8;
    --input-bg: #edeaf6;
    --info-bg: #edeaf6;
    --radius-card: 22px;
    --radius-btn: 14px;
    --radius-input: 12px;
    --shadow-card: 0 8px 40px rgba(61,56,153,0.09);
    --shadow-btn: 0 4px 20px rgba(107,100,216,0.38);
  }

  body { background: var(--bg); }

  .page {
    min-height: 100vh;
    background: var(--bg);
    font-family: 'DM Sans', sans-serif;
    display: flex;
    flex-direction: column;
  }

  /* ── NAV ── */
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 32px;
    background: rgba(237,233,247,0.85);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(107,100,216,0.08);
    position: sticky; top: 0; z-index: 10;
  }
  .nav-brand {
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: var(--primary);
    letter-spacing: -0.01em;
  }
  .nav-help {
    width: 34px; height: 34px;
    border-radius: 50%;
    border: 1.5px solid rgba(107,100,216,0.25);
    background: transparent;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: var(--text-soft);
    transition: border-color 0.2s, color 0.2s;
  }
  .nav-help:hover { border-color: var(--accent); color: var(--accent); }
  .nav-help svg { width: 15px; height: 15px; }

  /* ── MAIN ── */
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 16px 40px;
  }

  .headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 2.7rem);
    line-height: 1.15;
    color: var(--text-dark);
    text-align: center;
    margin-bottom: 14px;
    animation: fadeUp 0.5s ease both;
  }
  .headline em {
    font-style: italic;
    color: var(--accent);
  }

  .sub {
    font-size: 0.95rem;
    color: var(--text-soft);
    font-weight: 300;
    text-align: center;
    line-height: 1.6;
    max-width: 320px;
    margin-bottom: 36px;
    animation: fadeUp 0.5s 0.08s ease both;
  }

  /* ── CARD ── */
  .card {
    background: var(--card-bg);
    border-radius: var(--radius-card);
    padding: 36px 36px 28px;
    width: 100%;
    max-width: 420px;
    box-shadow: var(--shadow-card);
    display: flex;
    flex-direction: column;
    gap: 0;
    animation: fadeUp 0.5s 0.15s ease both;
    margin-bottom: 20px;
  }

  .field-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-mid);
    display: block;
    margin-bottom: 8px;
  }

  .input-wrap {
    position: relative;
    margin-bottom: 22px;
  }
  .input-icon {
    position: absolute;
    left: 14px; top: 50%; transform: translateY(-50%);
    color: var(--text-soft);
    width: 16px; height: 16px;
    pointer-events: none;
  }
  .toggle-icon {
    position: absolute;
    right: 14px; top: 50%; transform: translateY(-50%);
    color: var(--text-soft);
    width: 18px; height: 18px;
    cursor: pointer;
    background: none; border: none; padding: 0;
    display: flex; align-items: center; justify-content: center;
    transition: color 0.2s;
  }
  .toggle-icon:hover { color: var(--accent); }
  .toggle-icon svg { width: 17px; height: 17px; }

  .pw-input {
    width: 100%;
    padding: 13px 44px;
    background: var(--input-bg);
    border: 2px solid transparent;
    border-radius: var(--radius-input);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    color: var(--text-dark);
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    letter-spacing: 0.12em;
  }
  .pw-input::placeholder { letter-spacing: 0.06em; color: var(--text-soft); }
  .pw-input:focus { border-color: var(--accent); background: #f0edf9; }
  .pw-input.error { border-color: #e05555; }

  /* strength bar */
  .strength-bar-wrap {
    display: flex; gap: 4px;
    margin-top: -14px;
    margin-bottom: 20px;
  }
  .strength-seg {
    flex: 1; height: 3px;
    border-radius: 99px;
    background: var(--input-bg);
    transition: background 0.3s;
  }
  .strength-seg.weak   { background: #e05555; }
  .strength-seg.medium { background: #e09a22; }
  .strength-seg.strong { background: #4caf7d; }

  /* info box */
  .info-box {
    background: var(--info-bg);
    border-radius: 12px;
    padding: 14px 16px;
    display: flex; gap: 12px; align-items: flex-start;
    margin-bottom: 22px;
  }
  .info-box svg { width: 17px; height: 17px; color: var(--accent); flex-shrink: 0; margin-top: 1px; }
  .info-text { font-size: 0.83rem; color: var(--text-soft); line-height: 1.55; font-weight: 300; }
  .info-text strong { color: var(--text-dark); font-weight: 600; }

  /* error message */
  .error-msg {
    font-size: 0.78rem;
    color: #e05555;
    margin-top: -16px;
    margin-bottom: 14px;
    padding-left: 2px;
  }

  .btn-primary {
    width: 100%;
    padding: 15px 20px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    color: white;
    border: none;
    border-radius: var(--radius-btn);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.97rem;
    font-weight: 600;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    box-shadow: var(--shadow-btn);
    transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
    margin-bottom: 20px;
    letter-spacing: 0.01em;
  }
  .btn-primary:hover:not(:disabled) {
    opacity: 0.91;
    transform: translateY(-1px);
    box-shadow: 0 8px 28px rgba(107,100,216,0.45);
  }
  .btn-primary:active:not(:disabled) { transform: translateY(0); }
  .btn-primary:disabled { opacity: 0.55; cursor: not-allowed; }
  .btn-primary .arrow { width: 17px; height: 17px; transition: transform 0.2s; }
  .btn-primary:hover:not(:disabled) .arrow { transform: translateX(3px); }

  .back-link {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    color: var(--text-mid);
    font-size: 0.87rem;
    font-weight: 500;
    cursor: pointer;
    border: none; background: none;
    transition: color 0.2s;
  }
  .back-link:hover { color: var(--primary); }
  .back-link svg { width: 14px; height: 14px; transition: transform 0.2s; }
  .back-link:hover svg { transform: translateX(-3px); }

  /* ── ENCRYPTED BANNER ── */
  .enc-banner {
    width: 100%;
    max-width: 420px;
    background: linear-gradient(135deg, var(--teal-start) 0%, var(--teal-end) 100%);
    border-radius: 18px;
    padding: 18px 20px;
    display: flex; align-items: center; gap: 16px;
    animation: fadeUp 0.5s 0.25s ease both;
    margin-bottom: 16px;
  }
  .enc-icon-wrap {
    width: 44px; height: 44px; flex-shrink: 0;
    background: rgba(255,255,255,0.25);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
  }
  .enc-icon-wrap svg { width: 22px; height: 22px; color: white; }
  .enc-text { flex: 1; }
  .enc-title { font-size: 0.92rem; font-weight: 600; color: #1a3a35; }
  .enc-sub   { font-size: 0.8rem; color: #2a6057; font-weight: 300; margin-top: 2px; }
  .enc-check svg { width: 22px; height: 22px; color: rgba(30,80,70,0.55); }

  /* ── SUCCESS ── */
  .success-state {
    display: flex; flex-direction: column; align-items: center; gap: 12px;
    padding: 28px 0 10px;
    animation: fadeUp 0.4s ease both;
    text-align: center;
  }
  .success-circle {
    width: 64px; height: 64px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: var(--shadow-btn);
  }
  .success-circle svg { width: 28px; height: 28px; color: white; }
  .success-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: var(--text-dark);
  }
  .success-desc { font-size: 0.88rem; color: var(--text-soft); font-weight: 300; line-height: 1.6; }

  /* ── FOOTER ── */
  .footer {
    padding: 18px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(107,100,216,0.08);
    flex-wrap: wrap;
    gap: 10px;
  }
  .footer-copy { font-size: 0.78rem; color: var(--text-soft); font-weight: 300; }
  .footer-links { display: flex; gap: 22px; }
  .footer-links a {
    font-size: 0.78rem;
    color: var(--text-soft);
    text-decoration: none;
    transition: color 0.2s;
    font-weight: 400;
  }
  .footer-links a:hover { color: var(--primary); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    .card { padding: 28px 20px 22px; }
    .nav { padding: 14px 20px; }
    .footer { flex-direction: column; align-items: flex-start; }
  }
`;

function getStrength(pw) {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
}

function StrengthBar({ password }) {
  const s = getStrength(password);
  const cls = s <= 1 ? "weak" : s <= 2 ? "medium" : "strong";
  return (
    <div className="strength-bar-wrap">
      {[0,1,2,3].map(i => (
        <div key={i} className={`strength-seg ${i < s ? cls : ""}`}/>
      ))}
    </div>
  );
}

export default function ResetPassword() {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

 
const [error, setError] = useState("");
const navigate = useNavigate();

  const mismatch = confirm.length > 0 && pw !== confirm;
  const canSubmit = pw.length >= 8 && confirm === pw;
const { token } = useParams();
const handleSubmit = async () => {
  if (!canSubmit) return;

  setLoading(true);
  setError("");

  try {
    const res = await fetch(
      `http://localhost:5000/api/auth/reset-password/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: pw }),
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Failed");

    setDone(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);

  } catch (err) {
  setError(err.message);
}

  setLoading(false);
};
  return (
    <>
      <style>{styles}</style>
      <div className="page">

        {/* NAV */}
        <nav className="nav">
          <span className="nav-brand">Academic Curator</span>
          <button className="nav-help" title="Help">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
            </svg>
          </button>
        </nav>

        {/* MAIN */}
        <main className="main">
          <h1 className="headline">
            Secure your<br/>
            <em>sanctuary.</em>
          </h1>
          <p className="sub">Update your credentials to maintain your intellectual haven.</p>

          {/* FORM CARD */}
          <div className="card">
            {!done ? (
              <>
                {/* New Password */}
                <label className="field-label">New Password</label>
                <div className="input-wrap">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <input
                    type={showPw ? "text" : "password"}
                    className="pw-input"
                    placeholder="••••••••"
                    value={pw}
                    onChange={e => setPw(e.target.value)}
                  />
                  <button className="toggle-icon" onClick={() => setShowPw(v => !v)} tabIndex={-1}>
                    {showPw ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    )}
                  </button>
                </div>

                {pw && <StrengthBar password={pw}/>}

                {/* Confirm Password */}
                <label className="field-label">Confirm New Password</label>
                <div className="input-wrap">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <input
                    type={showConfirm ? "text" : "password"}
                    className={`pw-input${mismatch ? " error" : ""}`}
                    placeholder="••••••••"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                  />
                  <button className="toggle-icon" onClick={() => setShowConfirm(v => !v)} tabIndex={-1}>
                    {showConfirm ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    )}
                  </button>
                </div>
                {/* {mismatch && <p className="error-msg">Passwords don't match.</p>} */}
                {error && <p className="error-msg">{error}</p>}

                {/* Info box */}
                <div className="info-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p className="info-text">
                    <strong>Security Protocol:</strong> Choose a strong password with at least 8 characters, including symbols and numbers.
                  </p>
                </div>

                <button className="btn-primary" onClick={handleSubmit} disabled={!canSubmit || loading}>
                  {loading ? "Resetting…" : "Reset Password"}
                  {!loading && (
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  )}
                </button>

               <button className="back-link" onClick={() => navigate("/login")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                  Back to Sign In
                </button>
              </>
            ) : (
              <div className="success-state">
                <div className="success-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h2 className="success-title">Password Updated</h2>
                <p className="success-desc">Your password has been reset successfully.<br/>You can now sign in with your new credentials.</p>
                <button className="back-link" style={{marginTop: 12}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                  Back to Sign In
                </button>
              </div>
            )}
          </div>

          {/* ENCRYPTED BANNER */}
          <div className="enc-banner">
            <div className="enc-icon-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <div className="enc-text">
              <div className="enc-title">Encrypted Connection</div>
              <div className="enc-sub">Your security is our academic priority.</div>
            </div>
            <div className="enc-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
              </svg>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <span className="footer-copy">© 2024 Academic Curator. All rights reserved.</span>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
        </footer>
      </div>
    </>
  );
}