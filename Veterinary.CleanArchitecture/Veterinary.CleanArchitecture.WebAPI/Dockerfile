FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Veterinary.CleanArchitecture.WebAPI/Veterinary.CleanArchitecture.WebAPI.csproj", "Veterinary.CleanArchitecture.WebAPI/"]
RUN dotnet restore "Veterinary.CleanArchitecture.WebAPI/Veterinary.CleanArchitecture.WebAPI.csproj"
COPY . .
WORKDIR "/src/Veterinary.CleanArchitecture.WebAPI"
RUN dotnet build "Veterinary.CleanArchitecture.WebAPI.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Veterinary.CleanArchitecture.WebAPI.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Veterinary.CleanArchitecture.WebAPI.dll"]
