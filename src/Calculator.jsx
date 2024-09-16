import { useState } from 'react'; // Import doar useState

const Calculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('barbat');
  const [style, setStyle] = useState('all-mountain');
  const [level, setLevel] = useState('begginer');
  const [result, setResult] = useState('');

  const calculateSize = () => {
    let size = parseInt(height) * 0.4 + parseInt(weight) * 0.6;

    // Ajustări în funcție de gen
    if (gender === 'femeie') size -= 5;
    if (gender === 'copil') size -= 10;

    // Ajustări în funcție de stil
    if (style === 'freestyle' || style === 'jib') size -= 5;
    if (style === 'freeride') size += 5;

    // Ajustări în funcție de nivel
    if (level === 'begginer') size -= 5;
    if (level === 'expert') size += 5;

    setResult(`Mărimea recomandată este ${Math.round(size)} cm.`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Calculator Mărime Snowboard</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Înălțime (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={{ padding: '5px', margin: '5px 0' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Greutate (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{ padding: '5px', margin: '5px 0' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Gen: </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{ padding: '5px', margin: '5px 0' }}
        >
          <option value="barbat">Bărbat</option>
          <option value="femeie">Femeie</option>
          <option value="copil">Copil</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Stil de riding: </label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          style={{ padding: '5px', margin: '5px 0' }}
        >
          <option value="all-mountain">All Mountain</option>
          <option value="freeride">Freeride</option>
          <option value="freestyle">Freestyle</option>
          <option value="jib">Jib</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Nivel de riding: </label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          style={{ padding: '5px', margin: '5px 0' }}
        >
          <option value="begginer">Începător</option>
          <option value="intermediate">Intermediar</option>
          <option value="advanced">Avansat</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <button
        onClick={calculateSize}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Calculează
      </button>
      {result && (
        <h3 style={{ color: 'green', fontSize: '20px', marginTop: '20px' }}>
          {result}
        </h3>
      )}
    </div>
  );
};

export default Calculator;
