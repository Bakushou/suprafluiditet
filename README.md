# Elijah

En statisk webbplats med en lugn blå startsida och tre separata delar. Växla med **Byt del**. Den blå **Cornflower** är ett Gy25-studierum. Den gröna **Azalea** är den bevarade interaktiva läroboken om kvantfysik och suprafluiditet. Den bruna **Baiblem** är ett laboratorium för analys av fiktiva karaktärer. Varje del har egen navigation och eget innehåll.

## Publicera direkt på GitHub Pages

1. Packa upp ZIP-filen lokalt. GitHub packar inte upp en uppladdad ZIP.
2. Skapa ett repository och ladda upp **innehållet** i den uppackade mappen. `README.md` och `docs/` ska hamna i repositoryts rot.
3. Öppna **Settings → Pages**, välj **Deploy from a branch**, grenen **main**, mappen **/docs**, och spara.
4. Öppna GitHubs publicerade HTTPS-adress. Elijahs startsida ligger på `/`, Cornflower på `/cornflower.html`, Azalea på `/physics.html` och Baiblem på `/baiblem.html` under repositoryts adress. Gamla direktlänkar med `?view=` från `/` leder vidare till Cornflower.

Den färdigbyggda `docs/`-mappen kräver ingen installation. Relativa adresser fungerar även när repositorynamnet ingår i Pages-adressen. Använd en webbserver eller GitHub Pages; `file://` genom dubbelklick på HTML stöds inte.

## Uppdatera utan att radera webbplatsen

Behåll samma repository, gren och GitHub Pages-adress. Med GitHub Desktop: klona repositoryt en gång, kopiera in de uppdaterade filerna i samma mapp och välj Commit och Push. Git visar vilka filer som ändrats; du behöver inte tömma repositoryt först. Om du bara använder webbpaketet kan du ladda upp dess två `docs/`-omgångar över motsvarande sökvägar. Gamla filnamn med innehållshash kan ligga kvar utan att påverka sidan. Om en äldre flik försöker läsa en borttagen JavaScript-fil laddas den om en gång automatiskt. En omladdning tar inte bort lokalt sparade anteckningar.

Med hela källkoden kan du välja GitHub Actions under Settings → Pages. Arbetsflödet `.github/workflows/pages.yml` bygger då om sidan vid varje push till `main`. Ett repository med enbart färdiga `docs/`-filer använder i stället Deploy from a branch → main → /docs.

Egna citat och inställningar ligger i webbläsarens `localStorage`; studiematerial och anteckningar i `IndexedDB`. Uppdatering av filer på samma HTTPS-adress tar inte bort dem. En ny domän eller ett nytt repositorynamn ger däremot en annan lagringsadress. Exportera gärna dina tre separata säkerhetskopior före större ändringar. Offlinekoden behåller tidigare byggversioners kodfiler som reserv för flikar som redan är öppna.

## Vad som finns

| Del | Innehåll och arbetsflöde |
| --- | --- |
| Elijah | Startsida med länkar till de tre egna rummen, läsinställningar, egna citat, påminnelser, japanska ord, dagliga berättelser och 82 japanska dikter samt ett privat filarkiv. Välj del, kurs och kapitel/verk innan du lägger till PDF, bild, fil eller anteckning. Materialet visas sedan i rätt kontext. |
| Cornflower | Biologi 2, Kemi 2, Fysik 1b/2, Psykologi 1/2, Historia 1b, Religion 1, Samhällskunskap 1b och svensk grammatik. 60 lektionsguider, 10 biologiska fördjupningar, 17 biologianteckningar, 1 240 kort, sökbart register med 790 begrepp, 84 processer/samband, 72 formler och 164 ämnesbundna symbolposter. Repetition, Anki, egen text, kunskapskarta, diagnostik, källor och backup. |
| Azalea | Den ursprungliga fysikbokens 33 kapitel och formgivning, 29 särskilt förklarade nyckelformler, ett källbaserat register över 240 olika fristående ekvationer, 76 förklarade grundsymboler och 111 begreppsdefinitioner (42 ur boken och 69 kompletterande), härledningar, interaktiva modeller, forskningsrum och egna anteckningar. Egen kunskapskarta och diagnostik med kontrollfrågor för alla 33 kapitel; separat övning och Anki-lek. |
| Baiblem | Verk, karaktärer, scener, fri Markdown-text, markeringar till observationer/tolkningar/hypoteser, semantiska länkar, beteende- och utvecklingskedjor, relationscykler, tidslinje, flyttbar graf, regelmotor A–P, 15 metodsteg, 80 skrivna uppslagsartiklar, hela bifogade handbokens 24 sidor, redigerbara analysstarter och syntes till Markdown, HTML eller PDF via utskrift. Egen IndexedDB och egen JSON-backup. |

Cornflower visar inga Azalea-kort i ämneslistan, sökningen, kunskapskartan, diagnostiken eller samlingsleken. Azaleas motsvarande vyer använder dess egna fysikresurser. Baiblem har en helt egen databas. Fysik 1b/2 i Cornflower hör till Gy25 och är inte Azaleas suprafluiditetslärobok.

## Skriv och spara

I Cornflower och Azalea sparas ändringar och versioner lokalt i webbläsaren. **Inställningar & backup** exporterar en JSON-kopia av dessa två delars befintliga arbetsdata och tidigare versioner. Den äldre Blåtimmen-exporten kan läsas in där. I Baiblem görs separat export/import under **Backup & import**; bilder, relationer och revisionshistorik följer med. Sammanfogning behåller befintliga poster vid lika ID. Exakt återställning skapar först en nedladdningsbar förekopia.

Elijahs nya **Mina filer & anteckningar** har en egen IndexedDB (`elijah-materials-v1`) med destinationsfält för del, kurs, kapitel eller verk. Samma panel nås från Cornflowers ämnessidor och varje områdes väg, från Azaleas kapitel och från Baiblems verk. Upp till 100 MB per fil; faktiskt utrymme beror på webbläsaren. Öppna PDF i webbläsaren eller ladda ned filen. Exportera och importera detta arkiv separat via panelens **Flytta eller säkerhetskopiera**. Gamla PDF-bilagor inne i anteckningsredigeraren följer fortfarande den äldre arbetsdatabasens backup.

Lokal lagring synkroniseras inte mellan adresser, enheter eller webbläsare. Exportera efter viktiga arbetspass och före byte av adress. Privata JSON-kopior ska inte läggas i ett offentligt GitHub-repository. Webbplatsen kräver ingen backend, inloggning, AI-tjänst, API-nyckel eller betalning.

På startsidan har citat och påminnelser varsin lista. Avskilj poster med `---` på en egen rad och spara; upp till tre av varje visas samtidigt. Urvalet är stabilt under samma kalenderdag och byts vid midnatt eller när sidan öppnas en ny dag. Datum, veckodag och ISO-veckonummer visas på startsidan. Den japanska ordlistan har 14 inbyggda ord med betydelse och förklaring samt plats för egna ord. Använd `木 | き | träd` för tecken, läsning och betydelse, och valfritt `| förklaring` efter betydelsen. Tidigare sparade engelska ord finns kvar i en infälld lista. Den dagliga berättelsen kan kompletteras med egna poster. **Byt urval** visar andra poster. Egna listor ligger lokalt på samma webbadress; **Ladda ned kopia** och **Läs in kopia** hanterar deras separata JSON-backup. Äldre kopior med bara citat och påminnelser går också att läsa in. Filarkivets backup innehåller inte dessa listor.

Poesiavdelningen visar en haiku, tanka, senryū och haibun per lokal kalenderdag. Samlingen innehåller 82 dikter med japanska, romaji och egen engelsk översättning. Bashōs groddikt och kejsarinnan Jitōs tanka är historiska original; övriga dikter är nyskrivna för sidan. Sök och byt form i samlingsvyn. Dagsvalet räknas från 30 september 2026 och kräver ingen server eller schemalagd åtgärd.

Baiblem skiljer mellan visad händelse, möjlig tolkning och hypotes. Regelmotorn visar vilka poster som aktiverade ett förslag, antaganden och möjliga motexempel. Den tilldelar aldrig diagnoser eller påhittade motiv. Exempel med hypotetiska scener är markerade och ska ersättas med egna kontrollerade belägg.

## Anki

Cornflowers **Hela biblioteket** innehåller 1 240 Gy25-kort utan Azalea. Ämneslekarna kan laddas ned var för sig; biologins 550 kort finns också uppdelade i 310 fokuskort och 240 valfria korta detaljfrågor. Azalea har en separat lek med 67 kontrollfrågor. Anki-paketen innehåller förskrivet material, inte privata anteckningar eller repetitionshistorik.

## Offline och källor

Efter inläsning via HTTPS sparar service workern alla fyra HTML-ingångar, kod, stilar, Azaleas originaltext/PDF och figurer samt Baiblems originalhandbok. Anki-paket och externa källor kräver separat nedladdning. Offlinecache är ingen säkerhetskopia av egna data.

Cornflowers Gy25-indelning är studiestöd utifrån centralt innehåll med extra fördjupning. Kontrollera din lärares urval och aktuella ämnesplaner. Baiblems bifogade originalhandbok är primär teoretisk och metodisk källa; dess text och PDF finns direkt i delen.

## Ändra koden

Projektet använder Node 24, pnpm 11.19, Vite och React. Byggutdata ligger i `docs/`:

```sh
pnpm install --frozen-lockfile
pnpm test:content
pnpm test:links
pnpm test:workspace
pnpm test:materials
pnpm test:home
node --import ./scripts/load-ts.mjs scripts/test-baiblem.mjs
node --import ./scripts/load-ts.mjs scripts/test-baiblem-rules.mjs
pnpm exec tsc --noEmit
pnpm build
pnpm test:offline
```

Vid ändringar av kortdata: `python -m pip install genanki==0.13.1 lxml`, sedan `pnpm test:content && python scripts/build-decks.py && pnpm build`. Bygget uppdaterar `docs/` och Azaleas källbaserade ekvationsregister; ladda upp den nya mappen. GitHub Actions körs vid push till `main` och kan också startas manuellt via **Actions → Build and publish Elijah**.

`DATAFORMAT.md` beskriver lagring och ID:n. `INNEHALL_OCH_NASTA_STEG.md` listar omfattning och begränsningar. `docs/flytta-fran-fysiksidan.html` beskriver flytt från en äldre fysiksida.
