# LaTeX Tutorial: Uitgebreide Handleiding

![LaTeX Logo](https://latex-project.org/img/latex-project-logo.svg)

## 📋 Inhoudsopgave
- [Introductie tot LaTeX](#introductie-tot-latex)
- [Installatie](#installatie)
- [Basis Documentstructuur](#basis-documentstructuur)
- [Tekstopmaak](#tekstopmaak)
- [Secties en Organisatie](#secties-en-organisatie)
- [Lijsten](#lijsten)
- [Wiskunde](#wiskunde)
- [Tabellen](#tabellen)
- [Figuren en Afbeeldingen](#figuren-en-afbeeldingen)
- [Citaties en Bibliografie](#citaties-en-bibliografie)
- [Presentaties Maken](#presentaties-maken)
- [Geavanceerde Functies](#geavanceerde-functies)
- [Handige Bronnen](#handige-bronnen)

## 🚀 Introductie tot LaTeX

LaTeX (uitgesproken als "lay-tech" of "lah-tech") is een documentvoorbereidingssysteem ontworpen voor hoogwaardige typografie. In tegenstelling tot tekstverwerkers zoals Microsoft Word, is LaTeX gebaseerd op het idee dat auteurs zich moeten concentreren op inhoud in plaats van opmaak.

### Waarom LaTeX Gebruiken?
- **Prachtige typografie**: Professioneel ogende documenten met consistente opmaak
- **Wiskundige vergelijkingen**: Ongeëvenaarde ondersteuning voor complexe wiskundige notaties
- **Automatische nummering**: Voor secties, vergelijkingen, figuren, etc.
- **Verwijzingen**: Eenvoudig kruisverwijzingssysteem
- **Bibliografiebeheer**: Krachtige tools voor het beheren van citaties
- **Gratis en open-source**: Beschikbaar op alle platforms

## 💻 Installatie

### TeX-distributies

Een TeX-distributie is een bundel programma's en bestanden die nodig zijn voor LaTeX:

| Distributie | Platform | Beschrijving |
|--------------|----------|-------------|
| TeX Live | Cross-platform | Uitgebreid, aanbevolen voor de meeste gebruikers |
| MiKTeX | Windows | Installeert automatisch pakketten wanneer nodig |
| MacTeX | macOS | Gebaseerd op TeX Live, aangepast voor Mac |

### Editors

Je hebt een editor nodig om LaTeX-documenten te schrijven:

- **Overleaf**: Online editor, perfect voor beginners en samenwerking
- **TeXstudio**: Functierijke cross-platform editor
- **Visual Studio Code**: Met LaTeX Workshop extensie
- **Texmaker**: Cross-platform editor met geïntegreerde PDF-viewer

## 📄 Basis Documentstructuur

Elk LaTeX-document heeft deze basisstructuur:

```latex
\documentclass{article}

% Preamble: pakketten en instellingen
\usepackage{amsmath}
\usepackage{graphicx}
\title{Mijn Eerste LaTeX Document}
\author{Jouw Naam}
\date{\today}

\begin{document}
\maketitle

\section{Introductie}
Dit is een eenvoudig LaTeX-document.

\section{Inhoud}
Hier komt de hoofdinhoud van je document.

\end{document}
```

### Documentklassen

LaTeX biedt verschillende documentklassen:

- `article`: Voor korte documenten, wetenschappelijke papers
- `report`: Voor langere documenten met hoofdstukken (scripties)
- `book`: Voor boeken
- `beamer`: Voor presentaties
- `letter`: Voor brieven

## 🖊️ Tekstopmaak

### Basis Opmaak

```latex
\textbf{Vetgedrukte tekst}
\textit{Schuingedrukte tekst}
\underline{Onderstreepte tekst}
\texttt{Monospace tekst}
\textsf{Sans-serif tekst}
\textsc{Kleine hoofdletters}
```

### Groottes van Lettertypen

```latex
{\tiny Heel kleine tekst}
{\small Kleine tekst}
{\normalsize Normale tekst}
{\large Grote tekst}
{\huge Heel grote tekst}
```

### Kleur Toevoegen

Gebruik het `xcolor`-pakket:

```latex
\usepackage{xcolor}
\textcolor{red}{Deze tekst is rood}
\colorbox{yellow}{Tekst met gele achtergrond}
```

## 📑 Secties en Organisatie

LaTeX biedt hiërarchische structuren:

```latex
\part{Deel Titel}
\chapter{Hoofdstuk Titel} % Alleen in report en book
\section{Sectie Titel}
\subsection{Subsectie Titel}
\subsubsection{Subsubsectie Titel}
\paragraph{Paragraaf Titel}
\subparagraph{Subparagraaf Titel}
```

### Inhoudsopgave maken

```latex
\tableofcontents
```

## 📝 Lijsten

### Ongenummerde Lijst

```latex
\begin{itemize}
  \item Eerste item
  \item Tweede item
  \item Derde item
\end{itemize}
```

### Genummerde Lijst

```latex
\begin{enumerate}
  \item Eerste item
  \item Tweede item
  \item Derde item
\end{enumerate}
```

### Beschrijvingslijst

```latex
\begin{description}
  \item[Term 1] Beschrijving van term 1
  \item[Term 2] Beschrijving van term 2
\end{description}
```

## 🔢 Wiskunde

LaTeX is beroemd om zijn uitstekende mogelijkheden voor wiskundige formules.

### Inline Wiskunde

```latex
Einstein's vergelijking: $E = mc^2$
```

### Weergegeven Wiskunde

```latex
$$E = mc^2$$

% of

\begin{equation}
  E = mc^2
\end{equation}
```

### Veelvoorkomende Wiskundige Notaties

```latex
% Breuken
$\frac{1}{2}$

% Wortels
$\sqrt{2}$ of $\sqrt[3]{8}$

% Sommatie
$\sum_{i=1}^{n} i^2$

% Integralen
$\int_{a}^{b} f(x) \, dx$

% Limieten
$\lim_{x \to \infty} \frac{1}{x}$

% Matrices
\begin{pmatrix}
  a & b \\
  c & d
\end{pmatrix}

% Vergelijkingen met meerdere regels
\begin{align}
  x &= y + z \\
  &= a + b
\end{align}
```

## 📊 Tabellen

Gebruik de `tabular`-omgeving:

```latex
\begin{tabular}{|l|c|r|}
  \hline
  Links & Gecentreerd & Rechts \\
  \hline
  data & data & data \\
  data & data & data \\
  \hline
\end{tabular}
```

Voor meer geavanceerde tabellen gebruik je het `booktabs`-pakket voor professionele tabellen:

```latex
\usepackage{booktabs}

\begin{tabular}{lcr}
  \toprule
  Links & Gecentreerd & Rechts \\
  \midrule
  data & data & data \\
  data & data & data \\
  \bottomrule
\end{tabular}
```

## 🖼️ Figuren en Afbeeldingen

### Afbeeldingen invoegen

Gebruik het `graphicx`-pakket:

```latex
\usepackage{graphicx}

\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{bestandsnaam.jpg}
  \caption{Beschrijving van de afbeelding}
  \label{fig:mijnafbeelding}
\end{figure}
```

### Verwijzen naar figuren

```latex
Zie figuur \ref{fig:mijnafbeelding} voor details.
```

## 📚 Citaties en Bibliografie

### BibTeX-database maken (bestand.bib)

```bibtex
@book{knuth1986texbook,
  author = {Donald E. Knuth},
  title = {The TeXbook},
  year = {1986},
  publisher = {Addison-Wesley}
}

@article{lamport1994latex,
  author = {Leslie Lamport},
  title = {LaTeX: A Document Preparation System},
  journal = {Addison Wesley},
  year = {1994}
}
```

### Citaties in je document

```latex
\cite{knuth1986texbook} stelt dat...

Voor meer details, zie \cite{lamport1994latex}.
```

### Bibliografie maken

```latex
\bibliographystyle{plain}
\bibliography{bestand} % bestand.bib zonder extensie
```

## 🎬 Presentaties Maken

Gebruik de `beamer`-klasse:

```latex
\documentclass{beamer}

\title{Mijn Presentatie}
\author{Jouw Naam}
\date{\today}

\begin{document}

\begin{frame}
  \titlepage
\end{frame}

\begin{frame}{Slide Titel}
  Inhoud van de slide
  \begin{itemize}
    \item Punt 1
    \item Punt 2
  \end{itemize}
\end{frame}

\end{document}
```

## 🧩 Geavanceerde Functies

### Custom Commands

Maak je eigen commando's:

```latex
\newcommand{\naam}[#argumenten]{definitie}

% Bijvoorbeeld:
\newcommand{\N}{\mathbb{N}}
\newcommand{\highlight}[1]{\colorbox{yellow}{#1}}
```

### Packages maken

Maak je eigen pakketten met veelgebruikte instellingen:

```latex
% bestand: mijnpakket.sty
\ProvidesPackage{mijnpakket}

\RequirePackage{amsmath}
\RequirePackage{graphicx}

\newcommand{\mijnnaam}{Jouw Naam}
```

### TikZ voor het maken van diagrammen

```latex
\usepackage{tikz}

\begin{tikzpicture}
  \draw (0,0) circle (1cm);
  \draw (0,0) -- (1,1);
\end{tikzpicture}
```

## 📚 Handige Bronnen

- [Overleaf Documentation](https://www.overleaf.com/learn) - Uitgebreide tutorials
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX) - Gratis online boek
- [TeX StackExchange](https://tex.stackexchange.com/) - Vragen en antwoorden
- [CTAN](https://ctan.org/) - Comprehensive TeX Archive Network, voor alle pakketten

---

⭐ Deze tutorial dekt de basis, maar LaTeX heeft nog veel meer mogelijkheden! Experimenteer en ontdek wat je allemaal kunt doen. ⭐