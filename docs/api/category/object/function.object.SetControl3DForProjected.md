# object.SetControl3DForProjected
Задает 3D-control для списка проецируемых объектов.

## Описание
```lua
object.SetControl3DForProjected( wtControl3D: Control3DSafe )
```
Функция устанавливает 3D-control, отвечающий за отображение сцены, для списка проецируемых объектов.

## Список параметров
- **`wtControl3D`** (`Control3DSafe`) - 3D-control, который отвечает за показ сцены.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Получение и установка 3D-control
```lua
local wtMainAddonMainForm = common.GetAddonMainForm( "Main" ) -- (HELP) проверить
local wtControl3D = wtMainAddonMainForm:GetChildChecked( "MainScreenControl3D", false )
object.SetControl3DForProjected( wtControl3D )
```

::: info Описание примера
В примере получается главная форма аддона "Main", извлекается дочерний элемент "MainScreenControl3D" и передается в функцию для установки его в качестве контрола для проецируемых объектов.
:::