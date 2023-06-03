import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Header, Form, Input, Button, Message, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [inputText, setInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
      });
  }, []);

  useEffect(() => {
    if (filter === 'importante') {
      setFilteredNotes(notes.filter(note => note.importance));
    } else {
      setFilteredNotes(notes);
    }
  }, [notes, filter]);

  const handleAddNote = (e) => {
    e.preventDefault();

    if (inputText.trim() === '') {
      setErrorMessage('A nota não pode estar em branco.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }

    if (inputText.includes('-')) {
      setErrorMessage('A nota não pode conter o caractere "-".');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }

    const newNote = {
      text: inputText,
      importance: false
    };

    axios.post('http://localhost:3001/notes', newNote)
      .then(response => {
        setNotes([...notes, response.data]);
        setSuccessMessage('Nota adicionada com sucesso!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 2000);
        setInputText('');
      })
      .catch(error => {
        console.error('Error adding note:', error);
      });
  };

  const handleToggleImportance = (noteId) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, importance: !note.importance } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Header as="h1">Anotações</Header>
      <Form onSubmit={handleAddNote}>
        <Form.Field>
          <label>Nova Nota</label>
          <Input
            placeholder="Digite sua nota..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </Form.Field>
        <Button primary type="submit">
          Adicionar
        </Button>
      </Form>
      {errorMessage && (
        <Message negative>
          <Message.Header>Erro</Message.Header>
          <p>{errorMessage}</p>
        </Message>
      )}
      {successMessage && (
        <Message positive>
          <Message.Header>Sucesso</Message.Header>
          <p>{successMessage}</p>
        </Message>
      )}
      {filteredNotes.length > 0 && (
        <div>
          <Button.Group>
            <Button onClick={() => setFilter('')}>Todos</Button>
            <Button onClick={() => setFilter('importante')}>Importantes</Button>
          </Button.Group>
          <ul>
            {filteredNotes.map(note => (
              <li key={note.id}>
                {note.text}
                <Icon
                  name={note.importance ? 'star' : 'star outline'}
                  color={note.importance ? 'yellow' : 'grey'}
                  onClick={() => handleToggleImportance(note.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}

export default App;

