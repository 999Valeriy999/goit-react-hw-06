import './App.css';
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";
import { Provider } from 'react-redux';
import store from './redux/store';





function App() {
  return (
    <Provider store={store}>
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
    </Provider>
  );
}

export default App;
