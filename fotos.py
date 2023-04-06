import os

# Define la ruta donde se encuentran las fotos
ruta = 'fotos/'

# Obtiene la lista de archivos en la ruta especificada
archivos = os.listdir(ruta)

# Define el contador para los nombres de archivo
contador = 1

# Recorre cada archivo en la lista
for archivo in archivos:
    # Crea el nuevo nombre de archivo con el contador
    nuevo_nombre = str(contador) + '.jpg'
    
    # Une la ruta con el nombre de archivo original
    ruta_original = os.path.join(ruta, archivo)
    
    # Une la ruta con el nuevo nombre de archivo
    ruta_nuevo = os.path.join(ruta, nuevo_nombre)
    
    # Renombra el archivo con el nuevo nombre
    os.rename(ruta_original, ruta_nuevo)
    
    # Incrementa el contador
    contador += 1
