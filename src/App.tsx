import { ChangeEvent, useState } from 'react';
import {
  toast,
  ToastContainer,
  IPositions,
} from '@edinelsonslima/toast-notification';
import '@edinelsonslima/toast-notification/style.css';
import './index.css';

type IChange = ChangeEvent<HTMLSelectElement> & {
  target: {
    value: IPositions;
  };
};

export default function App() {
  const [value, setValue] = useState('');
  const [position, setPosition] = useState<IPositions>('right-top');
  const [duration, setDuration] = useState<Record<string, number>>({
    ghost: 3_000,
    info: 4_000,
    success: 5_000,
    warn: 6_000,
    error: 7_000,
  });

  const handleChangeDuration = (toast: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e?.target.value?.replace(/\D/, ''));
      setDuration((prev) => ({ ...prev, [toast]: value }));
    };
  };

  return (
    <>
      <ToastContainer position={position} />
      <h1 className='title'>React Toast Notification</h1>

      <h3 className='title'>Configurações do toast</h3>
      <input
        type='text'
        value={value}
        placeholder='digite aqui sua mensagem de texto!'
        onChange={({ target: { value } }) => setValue(value)}
      />

      <select onChange={({ target: { value } }: IChange) => setPosition(value)}>
        <option value='right-top'>right-top</option>
        <option value='right-center'>right-center</option>
        <option value='right-bottom'>right-bottom</option>
        <option value='center-top'>center-top</option>
        <option value='center-center'>center-center</option>
        <option value='center-bottom'>center-bottom</option>
        <option value='left-top'>left-top</option>
        <option value='left-center'>left-center</option>
        <option value='left-bottom'>left-bottom</option>
      </select>

      <h3 className='title'>Clique em um botão abaixo para o toast aparecer</h3>
      <div className='buttons'>
        <div className='container-action'>
          <input
            type='number'
            value={duration.ghost}
            onChange={handleChangeDuration('ghost')}
          />
          <button
            onClick={() =>
              toast.ghost({
                content: value || 'Lorem Ipsum Dolor',
                duration: duration.ghost,
              })
            }
          >
            GHOST
          </button>
        </div>

        <div className='container-action'>
          <input
            type='number'
            value={duration.info}
            onChange={handleChangeDuration('info')}
          />
          <button
            onClick={() =>
              toast.info({
                content: value || 'Lorem Ipsum Dolor',
                duration: duration.info,
              })
            }
          >
            INFORMATION
          </button>
        </div>

        <div className='container-action'>
          <input
            type='number'
            value={duration.success}
            onChange={handleChangeDuration('success')}
          />
          <button
            onClick={() =>
              toast.success({
                content: value || 'Lorem Ipsum Dolor',
                duration: duration.success,
              })
            }
          >
            SUCCESS
          </button>
        </div>

        <div className='container-action'>
          <input
            type='number'
            value={duration.warn}
            onChange={handleChangeDuration('warn')}
          />
          <button
            onClick={() =>
              toast.warn({
                content: value || 'Lorem Ipsum Dolor',
                duration: duration.warn,
              })
            }
          >
            WARNING
          </button>
        </div>

        <div className='container-action'>
          <input
            type='number'
            value={duration.error}
            onChange={handleChangeDuration('error')}
          />
          <button
            onClick={() =>
              toast.error({
                content: value || 'Lorem Ipsum Dolor',
                duration: duration.error,
              })
            }
          >
            ERROR
          </button>
        </div>
      </div>

      <footer className='footer'>
        <small>
          desenvolvido por{' '}
          <a href='https://github.com/edinelsonslima'>@edinelsonslima</a>
        </small>
      </footer>
    </>
  );
}
