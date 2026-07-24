# tutorialLib.GetTutorialBySysName

Возвращает идентификатор обучения по его системному имени.

## Описание

```lua
tutorialLib.GetTutorialBySysName( sysName: string | nil ): ObjectId | nil
```

Функция возвращает найденное по системному имени обучение. Если обучение с таким системным именем отсутствует, возвращается `nil`. Если найдено несколько обучений, возвращается первое найденное.

## Список параметров

- **`sysName`** (`string` | `nil`) - системное имя обучения.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - идентификатор обучения.

## Примеры

### Получение идентификатора обучения

```lua
local testTutorialId = tutorialLib.GetTutorialBySysName( "test" )
```