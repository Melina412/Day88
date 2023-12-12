export async function createStorage() {
  try {
    await fs.access(DB);
    console.log('storage ordner ist bereits vorhanden');
  } catch (error) {
    fs.mkdir(DB);
    console.log('storage ordner wurde erstellt');
  }
}

export async function saveDocument(document) {
  try {
    document.id = v4();
    await fs.mkdir(DB + document.collection);
    await fs.writeFile(
      DB + document.collection + '/' + document.id,
      JSON.stringify(document)
    );
    console.log('dokument erfolgreich gespeichert');
  } catch (error) {
    console.error('fehler beim speichern des dokuments:', error.message);
  }
}
