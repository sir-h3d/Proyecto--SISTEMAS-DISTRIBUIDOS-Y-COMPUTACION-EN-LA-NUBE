import mysql.connector
import pandas as pd


df = pd.read_csv('Stores.csv', header=0, names=['Store ID', 'Store_Area', 'Items_Available', 'Daily_Customer_Count', 'Store_Sales'])

cnx = mysql.connector.connect(user='', password='',host='', database='')
cursor = cnx.cursor()
print("Conexion dada")
for index, row in df.iterrows():
  sql = f"INSERT INTO store (Store_ID, Store_Area, Items_Available, Daily_Customer_Count, Store_Sales) VALUES ({row['Store ID']}, {row['Store_Area']}, {row['Items_Available']}, {row['Daily_Customer_Count']}, {row['Store_Sales']})"
  cursor.execute(sql)

cnx.commit()
cursor.close()
cnx.close()

