```
-- поля
ranges: Range [] - массив структур, задающих интервалы допустимых символов
    minChar: String - минимальный символ в интервале
    maxChar: String - максимальный символ в интервале
additionalChars: String - дополнительный набор допустимых символов
firstChars: String - допустимые символы которые могут стоять только в начале текста (например унарный минус или заглавная буква)
uniqueChars: String - набор допустимых символов, которые могут встречаться в тексте в единственном экземпляре (например , в десятичном дробном числе)
isAllowObject: boolean - флажок, говорящий о возможности вставлять объекты
```

Пример фильтра, разрешающего вводить только русские буквы:

```xml
<UITextFilter>
    <ranges>
        <Item>
            <minChar>А</minChar>
            <maxChar>я</maxChar>
        </Item>
    </ranges>
    <additionalChars>Ёё</additionalChars>
    <firstChars/>
    <uniqueChars/>
    <isAllowObject>false</isAllowObject>
</UITextFilter>
```