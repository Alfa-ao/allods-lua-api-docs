WidgetTextStyle. Стиль текста
multiline: boolean - многострочный текст. По умолчанию false

wrapText: boolean - переносить текст на следующую строку, если он не влезает в размеры виджета. Для многострочного текста. По умолчанию true

showClippedSymbol: boolean - показывать частично видимый символ, если он вылез за границы виджета по ширине. По умолчанию false

showClippedLine: boolean - показывать частично видимый символ, если он вылез за границы виджета по высоте. По умолчанию true

lineSpacing: number (integer) - фиксированное в пикселах расстояние между строками текста. По умолчанию 0 - не фиксированное расстояние

ellipsis: boolean - показывать многоточие в конце строки, если текст не влезает по горизонтали. По умолчанию true

allowSpacesInLineBegin: boolean - убирать пробельные символы в начале текста. По умолчанию false

Align: number (enum AlignY) - выравнивание текста по вертикали. По умолчанию ALIGNY_DEFAULT. Значения:

ALIGNY_DEFAULT - по умолчанию (по верхнему краю). Может быть переопределено в тексте с помощью aligny

ALIGNY_TOP - по верхнему краю

ALIGNY_MIDDLE - посередине

ALIGNY_BOTTOM - по нижнему краю

blendEffect: number (enum BLEND_EFFECT_...) - способ наложения текстур. По умолчанию BLEND_EFFECT_ALPHABLND