# rules.GetWishmaster

Извлекает описание Волшебной Лампы.

## Описание

```lua
rules.GetWishmaster(): table|nil
```

Функция возвращает индексированную с 0 таблицу, содержащую таблицы с описанием Волшебной Лампы. Если информация не получена, возвращается `nil`.

::: warning Замечание
Поле `image` доступно только при запросе расширенной информации (UIState), базовая информация (GameState) его не содержит.
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - индексированная с 0 таблица с таблицами описания.

- **`name`** (`WString`) - название Волшебной Лампы.

- **`description`** (`WString`) - текстовое описание Волшебной Лампы.

- **`paymentMultiplier`** (`number`) - модификатор цены кристаллов.

- **`bonusPaymentLimit`** (`number`) - ограничение бонуса в кристаллах.

- **`image`** (`TextureId`) - текстура с иконкой Волшебной Лампы (доступно только в UIState).

## Примеры

### Получение описания Волшебной Лампы

```lua
local wishmasterInfo = rules.GetWishmaster()
if wishmasterInfo and wishmasterInfo[ 0 ] then
    LogInfo( "Wishmaster: ", wishmasterInfo[ 0 ].name )
end
```