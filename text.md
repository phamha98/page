```sh
`openssl pkcs12 -nodes -provider default -provider Legacy -in Voip_Certificates.p12 -out bundleId.voip.dev.pem`,
`openssl pkcs12 -nodes -provider default -provider Legacy -in Certificates.p12 -out bundleId.prod.pem`,
`openssl pkcs12 -nodes -provider default -provider Legacy -in Certificates_Dev.p12 -out bundleId.dev.pem`,
`copy bundleId.prod.pem bundleId.voip.prod.pem`,
`ssh -i  stalk-key-ED25519.pem  ubuntu@176.32.66.38`,
`sudo -s`,
`scp -i  stalk-key-ED25519.pem  bundleId.dev.pem  ubuntu@176.32.66.38:/etc/flexisip/apn`,
`scp -i  stalk-key-ED25519.pem  FLEXISIP/*  ubuntu@176.32.66.38:/etc/flexisip/apn`,
`scp -i  stalk-key-ED25519.pem  FLEXISIP/*  ubuntu@52.192.194.240:/etc/flexisip/apn`,
`scp -i stalk-key-ED25519.pem -r ubuntu@176.32.66.38:/etc/flexisip/apn/ /path/to/local/directory`,
 