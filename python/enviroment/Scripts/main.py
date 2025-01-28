import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("inventario_fiori.csv")
df_sorted = df.sort_values(by="valore totale", ascending=False)

plt.bar(df_sorted["Nome"],df_sorted["valore totale"])
plt.title("grafico")
plt.show()

#print(df.head()) legge file csv

#df["valore totale"] = df["Quantità"]* df["Prezzo"]  #aggiunge colonna
#print(df)
