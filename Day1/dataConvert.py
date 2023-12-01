# Datei öffnen und Zeilen lesen
with open("data.txt", "r") as file:
    data = file.readlines()

# Entfernen von Leerzeichen und Zeilenumbrüchen, und jedes Element in Anführungszeichen setzen
data = ['"' + line.strip() + '"' for line in data]

# Konvertieren der Liste in einen String, getrennt durch Kommas
data_string = ",".join(data)

# Speichern des Ergebnisses in einer neuen Datei
with open("formatted_data.txt", "w") as output_file:
    output_file.write(data_string)
