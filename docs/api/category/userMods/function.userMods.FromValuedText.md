# userMods.FromValuedText

Возвращает переданный `ValuedText` в виде строки.

## Описание

```lua
userMods.FromValuedText( valuedText, oneLine )
```

Возвращает переданный `ValuedText` в виде строки — развернутого HTML-представления этого текста.

::: warning Замечание
Функцию можно использовать только в пользовательских дополнениях (userMods).
:::

## Список параметров

- **`valuedText`** (`ValuedText`)  
  Переданный объект `ValuedText`.

- **`oneLine`** (`boolean` | `nil`)  
  Флаг форматирования вывода. Если `true` или `nil`, то вывод будет в одну строку. Если `false`, то вывод будет в виде форматированного HTML с отступами и переносами строк.

## Возвращаемые значения

Возвращает `string` — HTML-структуру текста в обычном строковом типе.

## Примеры

### Пример использования `FromValuedText`

```lua
-- Получаем развернутое представление
local htmlString = userMods.FromValuedText( valuedText, false )
```

**Пример результата:**

Однострочное представление (`oneLine = true` или `nil`):
```html
<body shadow="1"><rs name="color" class="LogColorWhite"><rs name="fontsize" class="Size16"><rs name="fontname" class="AllodsSystem"><r name="main"><html><rs name="color_code"><r name="time"/><r name="pretext"><html><r name="channel"><html>[<r name="name">Разговор</r>]</html></r><r name="sender"><html>[<r name="player_object">[ValuedObject]: p_mm</r>]</html></r><r name="whisper"/>: </html></r><r name="text">sad</r></rs></html></r></rs></rs></rs></body>
```

Развернутое представление (`oneLine = false`):
```html:line-numbers {14-16,23-25,29}
<body shadow="1">
  <rs name="color" class="LogColorWhite">
    <rs name="fontsize" class="Size16">
      <rs name="fontname" class="AllodsSystem">
        <r name="main">
          <html>
            <rs name="color_code">
              <r name="time"/>
              <r name="pretext">
                <html>
                  <r name="channel">
                    <html>
                      [
                      <r name="name">
                        Разговор
                      </r>
                      ]
                    </html>
                  </r>
                  <r name="sender">
                    <html>
                      [
                      <r name="player_object">
                        [ValuedObject]: p_mm
                      </r>
                      ]
                    </html>
                  </r>
                  <r name="whisper"/>
                  :
                </html>
              </r>
              <r name="text">
                asd
              </r>
            </rs>
          </html>
        </r>
      </rs>
    </rs>
  </rs>
</body>
```

::: info Разбор результата
В логе видна структура текста. Видно, что в первом `ValuedText`-е есть подстановочный тег, в который подставлен другой `ValuedText`, а потом ещё один. У которого, в свою очередь, есть три подстановочных тега:
- В первый уже подставлен текст `"Разговор"`.
- Во второй подставлен некий `ValuedText` с `ValuedObject`-ом `p_mm`.
- В третий ничего не подставлено (тег `<r name="whisper"/>` пуст).
:::