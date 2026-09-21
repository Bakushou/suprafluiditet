# Publicera Suprafluiditet gratis med GitHub Pages

Det här paketet är färdigbyggt. Installera inget och ändra inga filnamn.

1. Packa upp ZIP-filen på din dator.
2. Öppna ditt GitHub-repository och välj **Add file → Upload files**.
3. Dra **allt innehåll i den uppackade mappen samtidigt** till uppladdningsrutan. Mapparna `assets` och `media` måste synas i listan innan du bekräftar.
4. Vänta tills samtliga filer laddats upp och välj **Commit changes**.
5. Gå till **Settings → Pages**.
6. Under **Build and deployment**, välj **Deploy from a branch**, branchen `main` och mappen `/ (root)`. Tryck **Save**.

Sajten publiceras normalt på:

`https://DITT_ANVÄNDARNAMN.github.io/REPOSITORYNAMNET/`

## Kontrollera före publicering

Repositoryts rot ska innehålla `index.html`, `.nojekyll`, `book-source.html`, PDF- och DOCX-filerna samt mapparna `assets` och `media`.

- `assets` innehåller all design och JavaScript. Om den saknas blir sidan vit och knapparna slutar fungera.
- `media` innehåller originaldokumentets två diagram.
- Länkarna är relativa och fungerar därför även när repositoryt publiceras i en undermapp.
