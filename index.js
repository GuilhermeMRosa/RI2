function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    this.getDdd = function () { return this.ddd; }
    this.getNumeroTelefone = function () { return this.numero; }

    this.setDdd = function (novoDdd) { this.ddd = novoDdd; }
    this.setNumeroTelefone = function (novoNumero) { this.numero = novoNumero; }
}

function Endereco(rua, numero, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;

    this.getRua = function () { return this.rua; }
    this.getNumero = function () { return this.numero; }
    this.getCidade = function () { return this.cidade; }
    this.getEstado = function () { return this.estado; }

    this.setRua = function (novaRua) { this.rua = novaRua; }
    this.setNumero = function (novoNumero) { this.numero = novoNumero; }
    this.setCidade = function (novaCidade) { this.cidade = novaCidade; }
    this.setEstado = function (novoEstado) { this.estado = novoEstado; }

    this.ruaUpper = function () { return this.rua.toUpperCase(); }
    this.ruaLower = function () { return this.rua.toLowerCase(); }

    this.cidadeUpper = function () { return this.cidade.toUpperCase(); }
    this.cidadeLower = function () { return this.cidade.toLowerCase(); }

    this.estadoUpper = function () { return this.estado.toUpperCase(); }
    this.estadoLower = function () { return this.estado.toLowerCase(); }
}

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    this.getNome = function () { return this.nome; }
    this.getTelefoneCelular = function () { return this.telefoneCelular; }
    this.getEmail = function () { return this.email; }
    this.getEndereco = function () { return this.endereco; }

    this.setNome = function (novoNome) { this.nome = novoNome; }
    this.setTelefoneCelular = function (novoTelefone) { this.telefoneCelular = novoTelefone; }
    this.setEmail = function (novoEmail) { this.email = novoEmail; }
    this.setEndereco = function (novoEndereco) { this.endereco = novoEndereco; }

    this.nomeUpper = function () { return this.nome.toUpperCase(); }
    this.nomeLower = function () { return this.nome.toLowerCase(); }

    this.emailUpper = function () { return this.email.toUpperCase(); }
    this.emailLower = function () { return this.email.toLowerCase(); }

    this.descricao = function () {
        console.log(`
            ---------------
            Informações do Cliente:
            ${this.getNome()}
            ---------------
            ---------------
            Telefone:
            DDD: ${this.getTelefoneCelular().getDdd()}
            Número: ${this.getTelefoneCelular().getNumeroTelefone()}
            ---------------
            Endereço: 
            Rua: ${this.getEndereco().getRua()}
            Número: ${this.getEndereco().getNumero()}
            Cidade: ${this.getEndereco().getCidade()}
            Estado: ${this.getEndereco().getEstado()}
            ---------------`)
    }
}

function ordenarClientes(clientes) {
    let clientesOrdenados = [...clientes];

    clientesOrdenados.sort(function (a, b) {
        return a.getNome().localeCompare(b.getNome());
    });

    return clientesOrdenados;
}

// Easter egg - 2
// "Felca pior que ritle, queremos injustissa"

const telLindinha = new TelefoneCelular("11", "94567-0001");
const endLindinha = new Endereco("Rua das Supergirls", 3, "Townsville", "SP");
const lindinha = new Cliente("Lindinha", telLindinha, "lindinha@powerpuffgirls.com", endLindinha);


const telNancy = new TelefoneCelular("21", "98888-1234");
const endNancy = new Endereco("Avenida das Névoas", 404, "Nebulópolis", "RJ");
const nancy = new Cliente("Nancy", telNancy, "nancy@nowhere.net", endNancy);


const telNilo = new TelefoneCelular("92", "91234-5678");
const endNilo = new Endereco("Travessa do Crocodilo", 7, "Nilópolis Profunda", "AM");
const nilo = new Cliente("Nilo", telNilo, "nilo@rioacima.com", endNilo);


const telFelca = new TelefoneCelular("47", "93333-9999");
const endFelca = new Endereco("Beco do Enigma", 13, "Felcarândia", "SC");
const felca = new Cliente("Felca", telFelca, "felca@misterio.org", endFelca);


const telDavyJones = new TelefoneCelular("71", "90000-0013");
const endDavyJones = new Endereco("Rua do Locker", 666, "Fundo do Atlântico", "BA");
const davyJones = new Cliente("DavyJones", telDavyJones, "davy@lockersea.net", endDavyJones);


const telOrochinho = new TelefoneCelular("63", "95555-0666");
const endOrochinho = new Endereco("Vila da Serpente", 99, "Konoha do Cerrado", "TO");
const orochinho = new Cliente("Orochinho", telOrochinho, "orochinho@serpente.ninja", endOrochinho);


const clientes = [lindinha, nancy, nilo, felca, davyJones, orochinho];
clientes.forEach(c => c.descricao());

const clientesOrdenados = ordenarClientes(clientes);
clientesOrdenados.forEach(c => console.log(c.getNome()));