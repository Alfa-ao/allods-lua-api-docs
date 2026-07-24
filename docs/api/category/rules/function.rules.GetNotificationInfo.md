# rules.GetNotificationInfo
Получает описание правил игрового события.

## Описание
```lua
rules.GetNotificationInfo( eventRuleId: ObjectId ): table | nil
```
Функция извлекает описание правил игрового события по указанному идентификатору и возвращает таблицу с информацией о типе нотификации, системном названии и кастомном тексте.

## Список параметров
- **`eventRuleId`** (`ObjectId`) - Идентификатор описания правил события.

## Возвращаемые значения
Возвращает `table` | `nil`. Описание о таблице:

- **`type`** (`number`(`ENUM_RuleNotificationType_*`)) - Тип нотификации, от которого зависит изображение на HUD-е и действие по клику мышью.

- **`sysType`** (`string`(`ENUM_RuleNotificationType_*`)) - Системное название типа нотификации.

- **`text`** (`WString` | `nil`) - Кастомный текст, выводимый поверх изображения.

- **`image`** (`TextureId` | `nil`) - Идентификатор кастомной текстуры для изображения нотификации (часть таблицы, реализованная только для UI).

## Примеры
### Получение и вывод текста нотификации
```lua
local notificationInfo = rules.GetNotificationInfo( eventRuleId )
if notificationInfo then
    LogInfo( notificationInfo.text )
end
```

## Смотрите также
- [ENUM_RuleNotificationType_*](sdgfdfsg)