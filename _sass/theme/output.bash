for style in base16 base16.dark base16.light base16.monokai base16.monokai.dark base16.monokai.light base16.solarized base16.solarized.dark base16.solarized.light colorful github gruvbox gruvbox.dark gruvbox.light igorpro molokai monokai monokai.sublime thankful_eyes tulip 
do 
rougify style $style > syntax.$style.css 
done
