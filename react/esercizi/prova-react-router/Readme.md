## Esercizio 1: Blog con Layout e Navigation
Crea un blog con
- Layout principale con header e footer persistenti;
- navbar con link che si evidenzino quando sono attivi: Home, Blog, About, Contatti (trovi le pagine da inserire nella navbar nella cartella `pages`)
- una sezione blog con nested routes:
    - `/blog`;
    - `/blog/news`;
    - `/blog/events`;
- per gestire le nestedRoutes usa le route dinamiche `useParams`
- usa -`<Outlet />` per il rendering delle pagine child

## Esercizio 2: Dashboard con navigazione programmatica
- Alla navbar dell'esercizio 1 aggiungi una voce di menu "Login";
- aggiungi una rotta  `/dashboard` e assegnale il componente `Dashboard` 
- aggiungi una rotta `/login` e collegala al componente `LoginForm` (già presente);
- usa `useNavigate` per fare un redirect a `/dashboard` quando l'utente fa login (simulato)