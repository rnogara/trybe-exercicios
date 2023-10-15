"""
1º - Instalar MongoDB através do Docker:
    docker run --name mongodb_v6 -d -p 27017:27017 mongo:6.0

2º - Importando uma base de dados para o MongoDB:
    usar esse .json -> https://lms-assets.betrybe.com/lms/trybnb.json
    ir para o dir que está o .json do link
    docker cp trybnb.json mongodb_v6:/tmp/trybnb.json

3º - No dir do exercicio executa o comando:
    docker exec mongodb_v6 mongoimport -d trybnb
        -c places --file /tmp/trybnb.json --jsonArray
"""
