import pandas as pd
import json
import webbrowser

# Caricamento del file CSV
file_path = input("Inserisci il percorso del file CSV da analizzare: ")
df = pd.read_csv(file_path)

df['Data'] = pd.to_datetime(df['Data'])  # Conversione colonna data

# Calcoli principali
total_sales_per_category = df.groupby('Categoria')['Totale'].sum().to_dict()
most_sold_product = df.groupby('Prodotto')['Quantità'].sum().idxmax()
best_day = df.groupby(df['Data'].dt.date)['Totale'].sum().idxmax()

# Creazione della tabella HTML
table_rows = "".join(
    f"<tr><td>{cat}</td><td>{val:.2f}</td></tr>" for cat, val in total_sales_per_category.items()
)

template = f"""
<!DOCTYPE html>
<html lang='it'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Analisi Vendite</title>
    <script src='https://cdn.jsdelivr.net/npm/chart.js'></script>
</head>
<body>
    <h1>Analisi delle Vendite</h1>
    <h2>Informazioni chiave</h2>
    <p>Prodotto più venduto: <strong>{most_sold_product}</strong></p>
    <p>Giorno con più vendite: <strong>{best_day}</strong></p>
    
    <h2>Totale vendite per categoria</h2>
    <table border='1'>
        <tr><th>Categoria</th><th>Totale Vendite (€)</th></tr>
        {table_rows}
    </table>
    
    <h2>Grafico delle vendite per categoria</h2>
    <canvas id='salesChart'></canvas>
    <script>
        new Chart(document.getElementById('salesChart'), {{
            type: 'bar',
            data: {{
                labels: {json.dumps(list(total_sales_per_category.keys()))},
                datasets: [{{
                    label: "Vendite (€)",
                    data: {json.dumps(list(total_sales_per_category.values()))},
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }}]
            }},
            options: {{scales: {{y: {{beginAtZero: true}}}}}}
        }});
    </script>
</body>
</html>
"""

# Salvataggio e apertura del file HTML
html_file = "analisi_vendite.html"
with open(html_file, "w", encoding="utf-8") as f:
    f.write(template)
webbrowser.open(html_file)
