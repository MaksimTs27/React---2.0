import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function LanguageSwitcher() {
  const { language, swichLanguage } = useContext(LanguageContext);

  const handleChange = (event) => {
    swichLanguage(event.target.value);
  };

  return (
    <div className="language-switcher-container">
      <p>Curren language: {language}</p>
      <select name="language" value={language} onChange={handleChange}>
        <option value="de">Немецкий</option> <option value="en">Английский</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
