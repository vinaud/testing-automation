export default{

    deliver: function() {

        var data = {
            name: 'Papito',
            cpf: '00000014141',
            email: 'papito@hotmail.com',
            whatsapp: '11999999999',
            address : {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Apt 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
                },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

    return data;

    }
 
}