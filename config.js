var config = {};
//change settings below as needed
//passwords should be MD5 hashed.  Use:  http://onlinemd5.com/ to generate MD5 for given password

config.port = 8080;
config.admins = [ 
               {name : 'admin', pass: '21232F297A57A5A743894A0E4A801FC3'}
               ];
config.users = [ 
                 {name : 'a2ron44', pass: '1A1DC91C907325C69271DDF0C944BC72'}
                 ];
config.accepted_emails = ['aaron@liquidwms.com'];
config.accepted_phones = ['5552135111'];
config.wav_buzz = 'R2D2.mp3';
config.tts_voice = 'Alex';

config.tts_file = 'gsound.mp3';
config.tts_type = 'voicerss';  //"google", "voicerss"
config.tts_google_lang = 'en';

config.tss_voicerss_url = 'https://api.voicerss.org/';
config.tts_voicerss_lang = 'en-us';
config.tss_voicerss_apikey = '35b775c9db2347ecbcc790eb651b045b';
config.tss_voicerss_speed = '-1';
config.tss_voicerss_format = '24khz_16bit_stereo';

module.exports = config;