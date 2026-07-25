# tutorialLib.GetTutorialInfo
Возвращает информацию об общих свойствах обучения.

## Описание

```lua
tutorialLib.GetTutorialInfo( id: TutorialId ): table|nil
```
Извлекает и возвращает детальную информацию об общих свойствах заданного обучения.

## Список параметров

- **`id`** (`TutorialId`) - Идентификатор обучения.

## Возвращаемые значения

Возвращает `table` | `nil`.

Если обучение найдено, возвращается таблица со следующими полями:

- **`sysName`** (`string` | `nil`) - Системное имя обучения.

- **`viewType`** (`number`(`Enum_TutorialViewType`)) - Тип отображения обучения.

- **`runType`** (`number`(`Enum_TutorialRunType`)) - Тип запуска обучения.

- **`isForced`** (`boolean`) - Игнорирует отключение.

- **`isUnlearnable`** (`boolean`) - Нельзя выучить.

- **`minLevel`** (`number`) - Минимальный уровень.

- **`maxLevel`** (`number`) - Максимальный уровень.

- **`nextTutorial`** (`TutorialId` | `nil`) - Следующее обучение в цепочке.

- **`runTimeout`** (`number`) - Время показа обучения при бездействии пользователя.

или `nil`, если обучение не существует.

## Примеры

### Получение информации об обучении
```lua
local testTutorialInfo = tutorialLib.GetTutorialInfo( tutorialLib.GetTutorialBySysName( "test" ) )
```

## Смотрите также

- [Enum_TutorialViewType](../constants#enum-tutorialviewtype)
- [Enum_TutorialRunType](../constants#enum-tutorialruntype)