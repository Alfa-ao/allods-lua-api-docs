# avatar.GetFieldTalentInfo
Получает информацию о таланте из заданного поля талантов.

## Описание
```lua
avatar.GetFieldTalentInfo( field: number, row: number, column: number ): table | nil
```
Извлекает и возвращает детальную информацию о таланте, расположенном в указанном поле, строке и столбце. Структура возвращаемой таблицы полностью идентична структуре данных, возвращаемой функцией `avatar.GetBaseTalentInfo`.

## Список параметров
- **`field`** (`number`)
Номер поля талантов.
- **`row`** (`number`)
Номер строки в указанном поле.
- **`column`** (`number`)
Номер столбца в указанном поле.

## Возвращаемые значения
Возвращает таблицу (`table`) с информацией о таланте, структура которой аналогична возвращаемому значению функции `avatar.GetBaseTalentInfo`, или `nil`, если талант по заданным координатам не найден.

## Примеры
### Получение информации о таланте
```lua
local field = 1
local row = 2
local column = 3
local talentInfo = avatar.GetFieldTalentInfo( field, row, column )
```

## Смотрите также
- [avatar.GetBaseTalentInfo](#)