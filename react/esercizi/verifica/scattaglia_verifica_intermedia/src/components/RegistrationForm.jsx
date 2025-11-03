import { useState } from 'react'



export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [passw, setPassw] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/




  function handleChangeName(event) {
    setName(event.target.value);

  }

  function handleChangemail(event) {
    setMail(event.target.value);

  }


  function handleChangePassw(event) {
    setPassw(event.target.value);

  }

  function handleCheck(mail) {

    if (!emailRegex.test(mail)) {
      alert;
      ("inserisci una mail corretta");
    }
    else {
      alert;
      ("Form inviato con successo");

    }


  }
  return (
    <>
      <div className='form'>
        <form onSubmit={handleCheck}>
          <h2> Form di registrazione</h2>
          <label>Nome: </label>
          <input type="text" placeholder="Inserisci il tuo nome" value={name} onChange={handleChangeName} />
          <br /><br />
          <label>Email: </label>
          <input type="email" placeholder="Inserisci la tua email" value={mail} onChange={handleChangemail} />

          <br /><br />
          <label>Password: </label>
          <input type="password" placeholder="Inserisci la tua password" value={passw} onChange={handleChangePassw} />
          <br />
          <button type='submit'>Invia</button>
        </form>
      </div>
    </>


  );


}


