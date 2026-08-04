# remortCreation.SetCameraPath

Запускает камеру по указанному пути на экране создания реморта.

## Описание

```lua
remortCreation.SetCameraPath( cameraPath: string, targetPath: string, delay: number )
```

Функция позволяет, находясь в экране создания реморта, запустить камеру по указанному пути. Начало движения можно отложить на заданное количество секунд. Камера двигается по пути с указанным именем, а точка, куда она направлена, движется по целевому пути. Имя файла указывается без пути и расширения (маршруты расположены в `Maps/<Map>/GlobalObjects/Routes/...`). После завершения движения передается событие `EVENT_REMORT_CHARACTER_SCENE_CAMERA_READY`.

## Список параметров

- **`cameraPath`** (`string`) - Имя раута движения камеры.

- **`targetPath`** (`string`) - Имя раута движения прицела камеры.

- **`delay`** (`number`) - Задержка в секундах перед запуском камеры.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Запуск камеры с задержкой

```lua
remortCreation.SetCameraPath( "cameraPath.(Route)", "targetPath.(Route)", 1.5 )
```

## Смотрите также

- [EVENT_REMORT_CHARACTER_SCENE_CAMERA_READY](/api/events/events.EVENT_REMORT_.md#event-remort-character-scene-camera-ready)