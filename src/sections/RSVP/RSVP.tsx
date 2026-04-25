import React, { useState } from 'react';
import { config } from '../../data/config';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './RSVP.module.scss';

type Attendance = 'coming' | 'not-coming';

interface FormState {
  name: string;
  guests: number;
  attendance: Attendance;
}

export default function RSVP() {
  const ref = useScrollReveal<HTMLElement>(0.1);
  const [form, setForm] = useState<FormState>({ name: '', guests: 1, attendance: 'coming' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function changeGuests(delta: number) {
    setForm(f => ({ ...f, guests: Math.max(1, Math.min(10, f.guests + delta)) }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const attendanceText = form.attendance === 'coming' ? 'Келемін' : 'Өкінішке орай, қатыса алмаймын';
    const text =
      `📩 RSVP\n\n` +
      `👤 ${form.name}\n` +
      `👥 Адам саны: ${form.guests}\n` +
      `✅ ${attendanceText}`;

    const { botToken, chatId } = config.rsvp.telegram;
    if (!botToken || !chatId) {
      setStatus('error');
      return;
    }

    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      if (!res.ok) throw new Error('Telegram error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Тойға келетініңізді растауыңызды сұраймыз!</h2>
          <p className={styles.intro}>
            Аты-жөніңіз (жұбыңызбен келетін болсаңыз, есімдеріңізді бірге жазуыңызды өтінеміз)
          </p>
        </header>

        {status === 'success' ? (
          <p className={styles.success}>Рахмет! Сіздің жауабыңыз қабылданды</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <input
                id="rsvp-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                className={styles.input}
                placeholder="Аты-жөніңіз"
                aria-label="Аты-жөніңіз"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>

            <div className={styles.field}>
              <p className={styles.fieldLabel}>Неше адам келеді?</p>
              <div className={styles.counter}>
                <button
                  type="button"
                  className={styles.counterBtn}
                  onClick={() => changeGuests(-1)}
                  disabled={form.guests <= 1}
                >−</button>
                <span className={styles.counterValue}>{form.guests}</span>
                <button
                  type="button"
                  className={styles.counterBtn}
                  onClick={() => changeGuests(1)}
                  disabled={form.guests >= 10}
                >+</button>
              </div>
            </div>

            <div className={styles.field}>
              <div
                className={styles.radios}
                role="radiogroup"
                aria-label="Жауабыңыз"
              >
                {(['coming', 'not-coming'] as Attendance[]).map(val => (
                  <label key={val} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="attendance"
                      value={val}
                      checked={form.attendance === val}
                      onChange={() => setForm(f => ({ ...f, attendance: val }))}
                      className={styles.radioInput}
                    />
                    <span className={styles.radioCustom} />
                    <span className={styles.radioText}>
                      {val === 'coming' ? 'Келемін' : 'Өкінішке орай, қатыса алмаймын'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>
                {config.rsvp.telegram.botToken && config.rsvp.telegram.chatId
                  ? 'Қате орын алды. Қайталап көріңіз.'
                  : 'Форма әлі бапталмаған. Жұпқа жеке хабарласыңыз.'}
              </p>
            )}

            <button type="submit" className={styles.btn} disabled={status === 'loading'}>
              {status === 'loading' ? '…' : 'Жіберу'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
