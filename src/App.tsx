import { ChangeEvent, useState } from 'react';
import {
  toast,
  ToastContainer,
  IToastContainerProps,
} from '@edinelsonslima/toast-notification';
import '@edinelsonslima/toast-notification/dist/style.css';
import './index.css';

type IPosition = IToastContainerProps['position'];

type IChange = ChangeEvent<HTMLSelectElement> & {
  target: {
    value: IPosition;
  };
};

export default function App() {
  const [value, setValue] = useState('');
  const [position, setPosition] = useState<IPosition>('right-top');

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
        <button
          onClick={() => toast.ghost({ text: value || 'Lorem Ipsum Dollor' })}
        >
          GHOST
        </button>
        <button
          onClick={() => toast.info({ text: value || 'Lorem Ipsum Dollor' })}
        >
          INFORMATION
        </button>
        <button
          onClick={() => toast.success({ text: value || 'Lorem Ipsum Dollor' })}
        >
          SUCCESS
        </button>
        <button
          onClick={() => toast.warn({ text: value || 'Lorem Ipsum Dollor' })}
        >
          WARNING
        </button>
        <button
          onClick={() => toast.error({ text: value || 'Lorem Ipsum Dollor' })}
        >
          ERROR
        </button>
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
