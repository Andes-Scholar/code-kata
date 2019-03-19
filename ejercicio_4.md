*USER STORY: Login*
+ *COMO* usuario
+ *QUIERO* una pantalla de login
+ *PARA* poder ingresar a mis sistemas

*CRITERIOS DE ACEPTACIÓN*
+ *DADO* un usuario y contraseña
+ *CUANDO* hacemos clic en botón login
+ *ENTONCES* si es exitoso, deberá redirigir a otra página.

+ *DADO* un usuario y contraseña
+ *CUANDO* hacemos clic en botón login
+ *ENTONCES* si falla, deberá limpiar los campos y dar un mensaje de error.


*USER STORY: Create user*
+ *COMO* usuario
+ *QUIERO* una pantalla de crear usuario
+ *PARA* poder crear los usuarios de la aplicación

+ *DADO* Un nuevo usuario
+ *CUANDO* hace hace clic en el botón crear
+ *ENTONCES* deberá verificar que el usuario no exista previamente, caso contrario deberá dar un mensaje de error.

+ *DADO* Un nuevo usuario
+ *CUANDO* hace hace clic en el botón crear
+ *ENTONCES* deberá verificar la complejidad de la contraseña (longitud mayor a 8, al menos 1 número y al menos 1 caracter especial).

*NOTAS*
+ La BD, se podrá simular con un archivo json con la información de usuarios, claves, etc.
