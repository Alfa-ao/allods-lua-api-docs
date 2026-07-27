# ValuedTextSafe:SetTextValues

Заполняет ValuedText переданными в textValues значениями.

## Описание

```lua
ValuedTextSafe:SetTextValues( textValues: table )
```

Функция заполняет ValuedText переданными в textValues значениями.

В первую очередь в textValues ищется поле format:

- Если `format` это `ValuedText`, то будет скопирована его структура (но не значения!).

- Если `format` это `string` / `WString` содержащий валидный XHTML-текст, то он будет распарсен в `ValuedText`.

- Если `format` это `string` / `WString` НЕ содержащий валидный XHTML-текст, то он будет установлен как `PlainText`.

- Во всех остальных случаях формат текста не изменится.

Далее выполняется обход всех string-ключей в таблице textValues (кроме format):

- Если значение имеет тип `string` - неявно выполняется `SetClassVal( key, value )`.

- Если значение имеет тип `int` - неявно выполняется `SetVal( key, IntWs( value ) )`. (HELP)

- Если значение имеет тип `float` - неявно выполняется `SetVal( key, FloatWs( value ) )`. (HELP)

- Если значение имеет тип `WString` / `ValuedText` / `ValuedObject` - неявно выполняется `SetVal( key, value )`.

- Если значение имеет тип `table` - неявно выполняется `SetVal( key, common.CreateValuedText( value ) )`.

- Во всех остальных случаях значение игнорируется.

В случае если какое-либо значение не удалось подставить (например из-за отсутствия соответствующего ключа в ValuedText), то оно будет проигнорировано.

::: tip Совет
Во всех случаях когда одновременно подставляется 3 и более значений настоятельно рекомендуется использовать данную API и выполнять подстановку за один вызов.
:::

::: warning Замечание
Изменение формата в существующем непустом ValuedText или виджете содержащем ValuedText не рекомендуется.
:::

## Список параметров

- **`textValues`** (`table`)

Таблица подставляемых значений.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Подстановка значений с использованием вложенных таблиц

```lua
local tab1 = {
    format = userMods.ToWString( [[<html>aa1 <r name="obj11"/> bb1 </html>]] ),
    obj11 = userMods.ToWString( [[<html>cc1 <r name="obj12"/> dd1 </html>]] ),
    obj12 = userMods.ToWString( [[<html>ee1 <r name="obj13"/> ff1 </html>]] ),
    obj13 = userMods.ToWString( [[gg1]] )
}

local tab2 = {
    format = userMods.ToWString( [[<html>aa2 <r name="obj21"/> bb2 </html>]] ),
    obj21 = userMods.ToWString( [[<html>cc2 <r name="obj22"/> dd2 </html>]] ),
    obj22 = userMods.ToWString( [[<html>ee2 <r name="obj23"/> ff2 </html>]] ),
    obj23 = tab1
}

valuedText:SetTextValues( tab2 )
```

::: info Описание примера
Формируются две таблицы `tab1` и `tab2` с вложенными XHTML-структурами. Таблица `tab1` передается в `tab2` как значение для ключа `obj23`. Затем выполняется подстановка значений в объект `VT` за один вызов.
:::

## Смотрите также

- [valuedText:SetClassVal](method.SetClassVal)
- [valuedText:SetVal](method.SetVal)
- [common.CreateValuedText](/api/category/common/function.common.CreateValuedText)