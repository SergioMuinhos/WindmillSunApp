package com.bolsadeideas.springboot.backend.apirest.auth;

public class JwtConfig {
	public static final String LLAVE_SECRETA = "alguna.clave.secreta.12345678";

	public static final String RSA_PRIVADA_PROF = "-----BEGIN RSA PRIVATE KEY-----\r\n" + 
			"MIIEowIBAAKCAQEAwRRkppjNSOZkENkh8/JNk7vjVq1J7jRWT89ZrgOYbS7BkKDX\r\n" + 
			"YYo3ylxi/Z7aQE5SYP1RIuz0Iw8ZuCsPr4Sh4nbkbWIPnthTB0ZWizmQCC2La81H\r\n" + 
			"U78zMCw0AetdGVU0+P0LAh+9lZAdXiZiTqFviNbOj/pfJqyPz6r9/7/HUDVuxpeO\r\n" + 
			"KXQO7PMhsQrwCAkj7oxVdXyoKjByyx1vz19A9sZgKrWhthhg409ngy3/RRTtzXqf\r\n" + 
			"gg6RgUNIeKmhQjC4E+1K8JtG3dBCFpGuZaCc/Y+PO4aj7c2JaQ2BtQvw9ZmlQmIA\r\n" + 
			"RlrD2wTfkld/gnsah9KPAUGzSK2Am2jiTTVnXwIDAQABAoIBAFYkOg+VxqjKmURn\r\n" + 
			"C13h8biCsBfAsmZDFWsAEHuxgPTdUmCrUcxjtSZkd4m9sJPWHazF98gEPZvSpd/j\r\n" + 
			"3lipbOwzrRAcGun8i3aIbB4rbVYos7ZB3JvBhx3r6rwcfOnLeRnJE3s8HAI5TNDv\r\n" + 
			"gRahsbg0Ve4ofwErJfI50J6kulDO75w2yAMefthdLDy9wqtCTwE/elcmZ3318GB+\r\n" + 
			"ctJeuemkDoyLTbaDrh98erewpz2WRCxXqTV9mDVzfsL/4Vqky9iCcF4ZhMYkhk22\r\n" + 
			"26UVfHUAd0Ovfe5KMUzGRpH0gc6FdSrkGfsWV0gp9anm2cwFeTKiVJmv2eo93yEn\r\n" + 
			"MySolpkCgYEA4IZIzyTSZ2pwRkM8QITjwYN7KsQlcu3kCxnf1h7LIPKWgbr5P6OU\r\n" + 
			"t842TYFMODCb/CCoX4Oe9YON+hkP+BDlcMvlmArO296gQV3mtsuMWChkRTmQ0fB9\r\n" + 
			"X7ryqpz9ry3i/RKydU+mPyFD5DbEn363gTv+K0OxmX26bItLn3rCgOMCgYEA3CWe\r\n" + 
			"HLX33o5x1NHAKCB9c/fObX/60uQwVQocGWyfeDleI8G22PAIL5K3Ns+s0RFcHVDJ\r\n" + 
			"IXicZ52ceVCCTpzw1KBX9f6ah9cVxIRV0UelSgC8nj4IivDsUcn8YIai1rNzfPCt\r\n" + 
			"5d6iN2SqnP4vDpp8hTOZR5d0j0W2FbVwsFzLtFUCgYEAgLqdLh7Xf7GYE8Di378R\r\n" + 
			"clb3HCr/qahZUkAQhQx8vDQ6NMFFvMYGM2hI3CEg2SqNlH4I61JkpjE6CsWp0Tmm\r\n" + 
			"wwg0Z/ryZT98NF4pNG751WW7L7F0pdmzmFpwXX/LN1Agz6aTqQz0rUdeTI9WJngZ\r\n" + 
			"sD/8V0PlpLJgW3F190cEE68CgYAj3YkN2mOAgapv5qAsqWZm30dlNYVymDR7lkMP\r\n" + 
			"rU+psYbxwlx8qVZcEcYBiwH3qaFdMU0jQ9gPVXEpnoEsN4tQyLKr5Afe+56TPpAQ\r\n" + 
			"oWB/VvFjwm133VpS1NpmC2k6G1BEWZ2rJoM9DQxyuUKHWYnR1Z8yN62Ire3FSaML\r\n" + 
			"SILzZQKBgFzwPCDsrBbNi2I0zzSuPptinosyEMwp4Fx/V0JpOMcB37k2wEbpN7v5\r\n" + 
			"LbwCiTtzS6oxWfY2yOA6eICTX2Eiu5a5MP/uShsBCKRR2dGuqxD3K3TmiWielY34\r\n" + 
			"+E+YwC7OKZiSJ97cePVhMbTt5RrIkXSuQbjWAdZkC5BAUJEWTpvl\r\n" + 
			"-----END RSA PRIVATE KEY-----";

	public static final String RSA_PUBLICA_PROF = "-----BEGIN PUBLIC KEY-----\r\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwRRkppjNSOZkENkh8/JN\r\n" + 
			"k7vjVq1J7jRWT89ZrgOYbS7BkKDXYYo3ylxi/Z7aQE5SYP1RIuz0Iw8ZuCsPr4Sh\r\n" + 
			"4nbkbWIPnthTB0ZWizmQCC2La81HU78zMCw0AetdGVU0+P0LAh+9lZAdXiZiTqFv\r\n" + 
			"iNbOj/pfJqyPz6r9/7/HUDVuxpeOKXQO7PMhsQrwCAkj7oxVdXyoKjByyx1vz19A\r\n" + 
			"9sZgKrWhthhg409ngy3/RRTtzXqfgg6RgUNIeKmhQjC4E+1K8JtG3dBCFpGuZaCc\r\n" + 
			"/Y+PO4aj7c2JaQ2BtQvw9ZmlQmIARlrD2wTfkld/gnsah9KPAUGzSK2Am2jiTTVn\r\n" + 
			"XwIDAQAB\r\n" + 
			"-----END PUBLIC KEY-----";
	
	
	public static final String RSA_PRIVATE="-----BEGIN RSA PRIVATE KEY-----\r\n"
			+ "MIIEogIBAAKCAQEA0YPyRU85Uy9IF+rGvQVO8sZPUO85L+tftfNOVAVz8umGrLCi\r\n"
			+ "kH5p89NGMwBueSrpXVTVggQFfDT4t2FJlLvX5zfaHIE5wtnF2jGb0I6jaVXtiqcq\r\n"
			+ "E9wWkwa1JXWpjDfhp+K/8kEtRuabHVnpfavEB2SVKGkPg80pNxvsRwYfcAWqZQTH\r\n"
			+ "zjE5oYaTY8FwnlCHZrDDh6lpbKVzC00e/wjv/Uw2X0AjoMFdsmltsOD1wclwGmUr\r\n"
			+ "C/QwDA7XL8wJuFgJ9IHOQLlZ30sEbl8G/SjgDxAnIMECgOTthXwZyaHYalIHSm0n\r\n"
			+ "RSAeXhHEpGdV6APr0oJK5pfAnNDcvjM/8dtLmwIDAQABAoIBAEDGkJLJKaoERj/O\r\n"
			+ "wF8UUxJQKZmWPJIKLW8tqBvmC7EgbhjaC4is7MkLmvqNuZoQoFHQtqoZ4DBEmFjp\r\n"
			+ "5Tvsz5WW+QIzGc6aUcdh6xCR6QfaHzTs9d9p/ji6rCrGtAK8DDJBsqKNcBgpl+99\r\n"
			+ "KulFv7eha1QxFzDir0lwgp560CFrr7+YYDkuPC6fMkuUTd7w7g/k97YaWZuC4EkO\r\n"
			+ "U9CeYoyIxkbfcjaV0l5DmWcnUqhFI8fPDacCKWyoplfVIx21KhHmogedaPfa1v06\r\n"
			+ "dUkqmH2LrMUqxQ2IsbuCebQFdI6YbwNGZVM/PdfMCjVdy7xbaelMsN4T3Cw+X81l\r\n"
			+ "QTqPG1ECgYEA7boh7tioB6K0cxPts6D14K8wrYoHPdK3HCmY9Ql/vVLSRa0yG27O\r\n"
			+ "lN56khPplT0StTU4ajRGpEohyiSUV+JTLzuW+TdpYA9HvtRbP/lM2aetRXWRE8Jd\r\n"
			+ "axhzGFIJwzqlpmc2UF36JmEnF6CQJ0jXZ+0zU39NxK2tcot8MbI9JSUCgYEA4Z6t\r\n"
			+ "/LHvhHZmxaMON7SRwA0ZPwOYn09HxNPsp4I7Jw5MHghTm+rKXgpDAfy6AEYmfn2J\r\n"
			+ "RRMDBoD72I3W5wqzhDAaKW5/GFjFWitx17KFJ5SKMjC23bwBcQnNINHXGKW+JcMH\r\n"
			+ "bWJaSXef1D1tsgs1okkJmdkXXgBw0ClNOKb2sb8CgYBSfXUK4SklRSMij3a7Dw5i\r\n"
			+ "wce9YBj1LeoWHqUR2hL2Sgfm35t0g3WxmKWljL1P6NpWALqrt6oPlh21fA3xlPpS\r\n"
			+ "eHYB0mWBTKwTnrJvN32gRRvN72bBGX+7CsfdV5JFqVMTs9rX9lQ3/xxGiZOb3h3I\r\n"
			+ "1TkrLxB4P9/g0F/vCq9G9QKBgHvnX9dxhH8zYtdQ56Lx+EUHLIEtoWiD6n8Of12y\r\n"
			+ "qHeXY3fuzLPIqmAgtJHnz+IMpGE84eDcQwIUXbqckpOJjfKfVA7Czut4/NC7ISb6\r\n"
			+ "tCN7cLWFiTeWYxhH8K4Ab2bqxtUIGREaPUkxd8XgAlkPzOGVyL8DuNB333yB4hWl\r\n"
			+ "o78TAoGAXaWpGQxtzkdtj136NNS/s6EgFmYD/lpaBbzo9c4mrFy8ukO42I0mgVRU\r\n"
			+ "qmhht5Zb1DQwkMiTdVGaXKvaShSlcRmehIISzXGVPgFwLwL79PMny4/1JzrMVMqM\r\n"
			+ "IN0jxpmLii5uEu2nf8RhlLSFgarrILKjqnzfoLIxClv1/c2uo/Q=\r\n"
			+ "-----END RSA PRIVATE KEY-----"; 
	
	public static final String RSA_PUBLIC="-----BEGIN PUBLIC KEY-----\r\n"
			+ "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0YPyRU85Uy9IF+rGvQVO\r\n"
			+ "8sZPUO85L+tftfNOVAVz8umGrLCikH5p89NGMwBueSrpXVTVggQFfDT4t2FJlLvX\r\n"
			+ "5zfaHIE5wtnF2jGb0I6jaVXtiqcqE9wWkwa1JXWpjDfhp+K/8kEtRuabHVnpfavE\r\n"
			+ "B2SVKGkPg80pNxvsRwYfcAWqZQTHzjE5oYaTY8FwnlCHZrDDh6lpbKVzC00e/wjv\r\n"
			+ "/Uw2X0AjoMFdsmltsOD1wclwGmUrC/QwDA7XL8wJuFgJ9IHOQLlZ30sEbl8G/Sjg\r\n"
			+ "DxAnIMECgOTthXwZyaHYalIHSm0nRSAeXhHEpGdV6APr0oJK5pfAnNDcvjM/8dtL\r\n"
			+ "mwIDAQAB\r\n"
			+ "-----END PUBLIC KEY-----";
	
	

}
