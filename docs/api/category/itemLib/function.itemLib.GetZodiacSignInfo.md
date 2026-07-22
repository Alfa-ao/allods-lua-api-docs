# itemLib.GetZodiacSignInfo

Возвращает информацию о знаке зодиака руны.

## Описание

```lua
itemLib.GetZodiacSignInfo( zodiacSignId: ZodiacSignId ): table | nil
```

Функция возвращает таблицу с информацией о знаке зодиака руны или `nil`, если данные отсутствуют.

## Список параметров

- **`zodiacSignId`** (`ZodiacSignId`) - идентификатор знака зодиака.

## Возвращаемые значения

Возвращает `table` | `nil` - информацию о знаке зодиака.

- **`name`** (`WString`) - название знака зодиака.

- **`description`** (`WString`) - описание знака зодиака.

- **`image`** (`TextureId`) - иконка.

- **`sysName`** (`string`) - системное имя (нелокализуемая строка для внутреннего употребления, не для показа игроку).

## Примеры

### Получение названия знака зодиака

```lua
local zodiacSignInfo = itemLib.GetZodiacSignInfo( zodiacSignId )
local name = zodiacSignInfo and zodiacSignInfo.name
```