import signup from '../Pages/SignupPage';

describe('Cadastro', () =>{
    it('usuário deve se tornar um deliver', () =>{
       
        var deliver = {
            name: 'Papito',
            cpf: '00000014141',
            email: 'papito@hotmail.com',
            whatsapp: '11999999999',
            address :{
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

        signup.go();
        signup.fillForm(deliver);
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShouldBe(expectedMessage);

    });

    it('CPF incorreto', () =>{
       
        var deliver = {
            name: 'Papito',
            cpf: '00000014141AA',
            email: 'papito@hotmail.com',
            whatsapp: '11999999999',
            address :{
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

        signup.go();
        signup.fillForm(deliver);
        signup.submit();

        const expectedMessage = 'Oops! CPF inválido';
        signup.alertMessageShouldBe(expectedMessage);

    });
});