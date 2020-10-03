import React, { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    Promise.all(
      uploadedFiles.map(async filex => {
        const { name, file } = filex;
        const data = new FormData();
        try {
          data.append('file', file, name);
          return await api.post('/employees/import', data);
        } catch (err) {
          console.log(err.response.error);
        }
      }),
    ).then(() => history.push('/'));
  }

  function submitFile(files: File[]): void {
    const acceptedFiles = files.map(uploadedFile => ({
      file: uploadedFile,
      name: uploadedFile.name,
      readableSize: filesize(uploadedFile.size),
    }));
    setUploadedFiles(acceptedFiles);
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <FiAlertCircle />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
