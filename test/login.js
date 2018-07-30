const expect = require('chai').inspect;
const DeGiro = require('..');
const moment = require('moment');
require('dotenv').config();

let giroInstance = null;


describe('Test the getters', () => {


    before(async () => {

        giroInstance = DeGiro.create();
        let session = await  giroInstance.login();

        giroInstance.session.id = session.id;
        giroInstance.session.account = session.account;

    });


    it('should get the outstanding orders', (done) => {
            done();
            giroInstance
                .getOrders()
                .then(results => {
                    console.log(results);
                    done();
                })
                .catch((reason) => {
                    done();
                        console.log(reason);
                    }
                );
        },
        (reason) => {
            console.log(reason);
        }
    );

    it('should get the transactions', (done) => {
            done();
            giroInstance
                .getTransactions(10)
                .then(results => {
                    console.log(results);
                    done();
                })
                .catch((reason) => {
                    done();
                        console.log(reason);
                    }
                );
        },
        (reason) => {
            console.log(reason);
        }
    );


});