// tuple--> è un nuovo tipo di dato introdottto in typescript
// ci serve a definire un array che ha elementi di tipi diversi tra loro
// fissare il tipo di un numero di elementi(ad esempio i primi due)-> l'array avra uno schema preciso dei tipi di dati

// un array in cui vogliamo memorizzare un arry e un eta di una persona-> il primo string, il secondo number

var persona: [string, number] = ["mario rossi", 25]; // prima una stringa poi un numero! IMPORTANTE!

// tuple non hanno una dimensione fissa-> posso aggiungere senza definire i tipi
// è possibile aggiungere altri elementi purche dello stesso tipo di dati dichiarati

persona[3] = "roma";
persona[5] = 1990;

// array persona contiene sei elementi-> due di tipo stringa,due numerici e due undefined
// tuple garantisce solo che i primi due siano del tipo specificato

// tuple vincolano al rispetto dei tipi dichiarati

persona[4] = true; // non è previsto nella dichiarazione della tuple
